'use client';

import { AlertTriangle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from '@/hooks/use-form-state';

import cookieLucky from '@/assets/cookie-lucky.gif';

import { signInWithEmailAndPassword } from './actions';
import Image from 'next/image';

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    undefined,
    () => {
      router.push('/');
    }
  );

  return (
    <div className="w-full md:flex md:gap-10">
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-3/5">
        <Image
          src={cookieLucky}
          alt="Animated Logo"
          className="hidden md:block h-auto w-45"
        />

        <h1 className="text-6xl hidden md:block">Cookie Lucky</h1>

        <span className="hidden md:block mt-3">
          This app give you a chance to get best cookie phrase love for your
          day.
        </span>
      </div>

      <div className="space-y-4 p-6 md:p-0 md:w-2/6 md:mt-28">
        <form onSubmit={handleSubmit} className="space-y-10">
          {success === false && message && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Sign in failed!</AlertTitle>
              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              name="email"
              type="email"
              id="email"
              defaultValue={searchParams.get('email') ?? ''}
            />

            {errors?.email && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" id="password" />

            {errors?.password && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.password[0]}
              </p>
            )}

            <Link
              href="/auth/forgot-password"
              className="text-xs font-medium text-foreground hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Sign in with e-mail'
            )}
          </Button>

          <Button className="w-full" variant="link" size="sm" asChild>
            <Link href="/auth/sign-up">Create new account</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
