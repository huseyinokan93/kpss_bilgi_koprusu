'use server';
/**
 * @fileOverview A Genkit flow that generates a multiple-choice quiz for KPSS topics.
 *
 * - generateQuiz - A function that generates a set of quiz questions.
 * - GenerateQuizInput - The input type for the function.
 * - GenerateQuizOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateQuizInputSchema = z.object({
  topic: z.string().describe('The KPSS topic to generate a quiz for.'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

const QuizQuestionSchema = z.object({
  question: z.string().describe('The question text.'),
  options: z.array(z.string()).length(4).describe('Four multiple-choice options.'),
  correctAnswer: z.string().describe('The correct option (must be one of the four options).'),
  explanation: z.string().describe('A brief explanation of why the answer is correct.'),
});

const GenerateQuizOutputSchema = z.object({
  questions: z.array(QuizQuestionSchema).length(20).describe('A list of 20 multiple-choice questions.'),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

export async function generateQuiz(input: GenerateQuizInput): Promise<GenerateQuizOutput> {
  return generateQuizFlow(input);
}

const generateQuizPrompt = ai.definePrompt({
  name: 'generateQuizPrompt',
  input: { schema: GenerateQuizInputSchema },
  output: { schema: GenerateQuizOutputSchema },
  prompt: `Sen bir KPSS uzmanısın. Kullanıcının seçtiği şu konu hakkında tam 20 soruluk, kaliteli ve orta-zor seviyede bir deneme sınavı hazırla: {{{topic}}}.

Sorular KPSS formatında olmalı, çeldiriciler (yanlış şıklar) mantıklı olmalı. 
Her soru için 4 şık (A, B, C, D) ve doğru cevabı belirt. Ayrıca kısa bir çözüm açıklaması ekle.

Tüm sorular Türkçe olmalıdır.`,
});

const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async (input) => {
    const { output } = await generateQuizPrompt(input);
    if (!output) {
      throw new Error('Sınav üretilemedi.');
    }
    return output;
  }
);
