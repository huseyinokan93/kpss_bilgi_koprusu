
'use server';

import {
  generateTopicSummary,
  GenerateTopicSummaryInput,
} from '@/ai/flows/generate-topic-summary';
import {
  generateMnemonicHint,
  GenerateMnemonicHintInput,
} from '@/ai/flows/generate-topic-summary';
import {
  generateQuiz,
  GenerateQuizInput,
} from '@/ai/flows/generate-quiz';
import { z } from 'zod';

const topicSummarySchema = z.object({ topic: z.string() });
const mnemonicHintSchema = z.object({ topic: z.string(), text: z.string() });
const quizSchema = z.object({ topic: z.string() });

export async function getTopicSummaryAction(input: GenerateTopicSummaryInput) {
  const parsedInput = topicSummarySchema.safeParse(input);
  if (!parsedInput.success) {
    throw new Error('Invalid input');
  }
  return await generateTopicSummary(parsedInput.data);
}

export async function getMnemonicHintAction(input: { topic: string; text: string }) {
  const parsedInput = mnemonicHintSchema.safeParse(input);
  if (!parsedInput.success) {
    throw new Error('Invalid input');
  }
  // This uses a helper in generateTopicSummary flow or a specific one if defined
  // For consistency, ensuring the action exists
  const { generateMnemonicHint } = await import('@/ai/flows/generate-mnemonic-hint');
  return await generateMnemonicHint(parsedInput.data);
}

export async function generateQuizAction(input: GenerateQuizInput) {
  const parsedInput = quizSchema.safeParse(input);
  if (!parsedInput.success) {
    throw new Error('Invalid input');
  }
  return await generateQuiz(parsedInput.data);
}
