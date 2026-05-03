'use server';
/**
 * @fileOverview A Genkit flow that generates a summary and a mnemonic hint for KPSS students.
 *
 * - generateMnemonicHint - A function that generates a summary and a mnemonic hint.
 * - GenerateMnemonicHintInput - The input type for the generateMnemonicHint function.
 * - GenerateMnemonicHintOutput - The return type for the generateMnemonicHint function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateMnemonicHintInputSchema = z.object({
  topic: z.string().describe('The specific topic the text is about (e.g., "Ottoman Empire, Conquerors").'),
  text: z.string().describe('The complex fact or list to be summarized and turned into a mnemonic.'),
});
export type GenerateMnemonicHintInput = z.infer<typeof GenerateMnemonicHintInputSchema>;

const GenerateMnemonicHintOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the input text, highlighting important details for KPSS.'),
  mnemonicHint: z.string().describe('A memorable hint or mnemonic based on the important details, designed for easy memorization.'),
});
export type GenerateMnemonicHintOutput = z.infer<typeof GenerateMnemonicHintOutputSchema>;

export async function generateMnemonicHint(input: GenerateMnemonicHintInput): Promise<GenerateMnemonicHintOutput> {
  return generateMnemonicHintFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMnemonicHintPrompt',
  input: { schema: GenerateMnemonicHintInputSchema },
  output: { schema: GenerateMnemonicHintOutputSchema },
  prompt: `You are an AI assistant specialized in helping KPSS students memorize complex information.\nYour task is to take a given text related to a specific topic, summarize its important details, and then create a memorable mnemonic hint (şifreleme) for those details.\n\nFocus on extracting the most crucial information that a KPSS student would need to remember for the exam. The mnemonic hint should be creative, easy to recall, and directly related to the summarized points.\n\nTopic: {{{topic}}}\nText to process:\n{{{text}}}\n\nPlease provide your output in JSON format with two fields: "summary" and "mnemonicHint".`,
});

const generateMnemonicHintFlow = ai.defineFlow(
  {
    name: 'generateMnemonicHintFlow',
    inputSchema: GenerateMnemonicHintInputSchema,
    outputSchema: GenerateMnemonicHintOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
