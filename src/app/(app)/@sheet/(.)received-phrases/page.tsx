import { LogoutButton } from '@/components/logout-button';
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
      <>
        <LogoutButton />
        <Sheet defaultOpen>
          <SheetContent className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
            <SheetHeader>
              <SheetTitle className="text-xl font-semibold text-gray-800">
                Received Phrases
              </SheetTitle>
            </SheetHeader>

            <div className="mt-4 space-y-3">
              {phrases.length > 0 ? (
                phrases.map((phrase: Phrase) => (
                  <div
                    key={phrase.id}
                    className="p-4 bg-gray-100 rounded-lg border border-gray-200"
                  >
                    <p className="text-gray-700 text-sm">{phrase.phrase}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No phrases available.</p>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  } catch (error) {
    console.error('Error fetching phrases:', error);
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md mx-auto mt-6">
        Error loading phrases. Please try again later.
      </div>
    );
  }
}
