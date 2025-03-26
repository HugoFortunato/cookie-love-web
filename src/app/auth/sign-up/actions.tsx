'use server';

import { HTTPError } from 'ky';

import { z } from 'zod';

import { signUp } from '@/http/sign-up';

const signUpSchema = z.object({
  name: z.string().min(1, { message: 'Please, provide your name.' }),
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, { message: 'Please, provide your password.' }),
});

export async function signUpWithEmailAndPassword(data: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { name, email, password } = result.data;

  try {
    await signUp({
      name,
      email,
      password,
    });

    return { success: true, message: null, errors: null };
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    return {
      success: false,
      message: 'User with same e-mail already exists.',
      errors: null,
    };
  }
}
