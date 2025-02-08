import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { getReceivedPhrases, Phrase } from '@/http/get-received-phrases';

export default async function CreateOrganization() {
  try {
    const { phrases } = await getReceivedPhrases();

    return (
      <Sheet defaultOpen>
        <SheetHeader>
          <SheetTitle>Your Phrases</SheetTitle>
        </SheetHeader>

        <SheetContent>
          {phrases.map((phrase: Phrase) => (
            <div key={phrase.id}>
              <p>{phrase.phrase}</p>
              <span>nois</span>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    );
  } catch (error) {
    console.error('Error fetching phrases:', error);
    return <div>Error loading phrases.</div>;
  }
}
