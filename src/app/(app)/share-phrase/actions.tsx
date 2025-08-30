'use server';

import { HTTPError } from 'ky';

import { z } from 'zod';

import { shareYourPhrase } from '@/http/share-phrase';

const sharePhraseSchema = z.object({
  recipientEmail: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  content: z.string().min(1, { message: 'Please, provide your password.' }),
});

export async function sharePhrase(data: FormData) {
  const result = sharePhraseSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { recipientEmail, content } = result.data;

  try {
    const { phrase } = await shareYourPhrase({
      recipientEmail,
      content,
    });

    return { success: true, message: null, errors: null, phrase };
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    };
  }
}
