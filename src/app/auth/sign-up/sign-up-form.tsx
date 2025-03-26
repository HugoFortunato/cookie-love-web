'use client';

import { AlertTriangle, Heart, Loader2 } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from '@/hooks/use-form-state';

import cookieLucky from '@/assets/cookie-lucky.gif';

import { signUpWithEmailAndPassword } from './actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function SignUpForm() {
  const router = useRouter();
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signUpWithEmailAndPassword,
    undefined,
    () => {
      router.push('/auth/sign-in');
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

        <div className="text-6xl hidden md:flex md:items-center md:justify-center">
          Cookie
          <span className="text-red-500">love</span>
          <Heart className="size-5 relative bottom-6 right-3" color="red" />
        </div>

        <strong className="hidden md:block mt-3">
          This app gives you a chance to get the best cookie phrase love for
          your day.
        </strong>
      </div>

      <div className="space-y-4 p-6 md:p-0 md:w-2/6 md:mt-28">
        <form onSubmit={handleSubmit} className="space-y-10">
          {success === false && message && !isPending && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Sign Up failed</AlertTitle>
              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" id="name" />

            {errors?.name && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.name[0]}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" type="email" id="email" />

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
          </div>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
