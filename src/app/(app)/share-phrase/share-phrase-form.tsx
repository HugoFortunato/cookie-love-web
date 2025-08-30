'use client';

import { AlertTriangle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from '@/hooks/use-form-state';

import { sharePhrase } from './actions';

export function SharePhraseForm() {
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    sharePhrase,
    undefined,
    () => {
      toast.success('Phrase shared successfully!');
    }
  );

  return (
    <div className="w-full flex items-center justify-center h-svh">
      <div className="space-y-4 p-6 md:p-0 md:w-2/6 md:mt-28">
        <form onSubmit={handleSubmit} className="space-y-10">
          {success === false && message && !isPending && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Share Phrase!</AlertTitle>
              <AlertDescription>{<p>{message}</p>}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-1">
            <Label htmlFor="recipientEmail">E-mail</Label>
            <Input name="recipientEmail" type="email" id="recipientEmail" />

            {errors?.recipientEmail && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.recipientEmail[0]}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="content">Message</Label>
            <Input name="content" type="text" id="content" />

            {errors?.content && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.content[0]}
              </p>
            )}
          </div>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Share Phrase'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
