'use server';
/**
 * @fileOverview A Genkit flow for generating a concise summary, key points, and mnemonics for a given KPSS topic.
 *
 * - generateTopicSummary - A function that orchestrates the generation of topic summaries and mnemonics.
 * - GenerateTopicSummaryInput - The input type for the generateTopicSummary function.
 * - GenerateTopicSummaryOutput - The return type for the generateTopicSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTopicSummaryInputSchema = z.object({
  topic: z
    .string()
    .describe(
      'The KPSS topic for which to generate a summary and mnemonics, e.g., "Kurtuluş Savaşı", "Cumhuriyet Dönemi Türk Edebiyatı", "Tarih Öncesi Çağlar".'
    ),
});
export type GenerateTopicSummaryInput = z.infer<
  typeof GenerateTopicSummaryInputSchema
>;

const GenerateTopicSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the given topic, focusing on important details relevant for KPSS, formatted in paragraphs.'
    ),
  keyPoints: z
    .array(z.string())
    .describe('A list of critical key points from the topic, suitable for quick review.'),
  mnemonics: z
    .array(z.string())
    .describe(
      'A list of creative and easy-to-remember mnemonics (şifrelemeler) for the topic, designed to aid memorization for KPSS exams.'
    ),
});
export type GenerateTopicSummaryOutput = z.infer<
  typeof GenerateTopicSummaryOutputSchema
>;

export async function generateTopicSummary(
  input: GenerateTopicSummaryInput
): Promise<GenerateTopicSummaryOutput> {
  return generateTopicSummaryFlow(input);
}

const generateTopicSummaryPrompt = ai.definePrompt({
  name: 'generateTopicSummaryPrompt',
  input: {schema: GenerateTopicSummaryInputSchema},
  output: {schema: GenerateTopicSummaryOutputSchema},
  prompt: `Sen bir KPSS öğrencisisin ve sana verilen konunun en önemli detaylarını, anahtar noktalarını ve kolay akılda kalıcı şifrelemelerini öğrenmek istiyorsun.

Verilen konuda sana yardımcı olacak bir uzmansın. Amacın, konuyu en sade ve balansılır şekilde özetlemek, KPSS için kritik olan anahtar bilgileri madde madde sunmak ve hatırlamayı kolaylaştıracak yaratıcı şifrelemeler oluşturmaktır.

Konu: {{{topic}}}

---

Yukarıdaki konuyu dikkate alarak aşağıdaki JSON formatında çıktı üret:

1.  **summary**: Konunun önemli detaylarına odaklanan, paragraflar halinde yazılmış özlü bir özet.
2.  **keyPoints**: Konunun en kritik noktalarını içeren, maddeler halinde sunulmuş bir liste.
3.  **mnemonics**: Konuyla ilgili, KPSS adaylarının kolayca hatırlamasını sağlayacak, yaratıcı ve akılda kalıcı şifrelemeler içeren bir liste.

Lütfen tüm çıktıyı Türkçe olarak hazırla.`,
});

const generateTopicSummaryFlow = ai.defineFlow(
  {
    name: 'generateTopicSummaryFlow',
    inputSchema: GenerateTopicSummaryInputSchema,
    outputSchema: GenerateTopicSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateTopicSummaryPrompt(input);
    if (!output) {
      throw new Error('Failed to generate topic summary and mnemonics.');
    }
    return output;
  }
);
