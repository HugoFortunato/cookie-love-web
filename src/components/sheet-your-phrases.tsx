/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ArrowRight } from 'lucide-react';
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog';

//@ts-ignore
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Phrase } from '@/http/get-received-phrases';

interface SheetComponentProps {
  phrases: Phrase[];
}

export function SheetYourPhrases({ phrases }: SheetComponentProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="submit"
          className="text-sm text-emerald-500 font-normal flex items-center"
        >
          <ArrowRight className="mr-2" />
          see your shared phrases
        </button>
      </SheetTrigger>
      <SheetContent>
        <DialogContent>
          <VisuallyHidden>
            <DialogTitle>
              <span>Your Phrases</span>
            </DialogTitle>
          </VisuallyHidden>
        </DialogContent>

        {phrases.map((phrase) => (
          <div key={phrase.id}>
            <p>{phrase.phrase}</p>
            <span>nois</span>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
