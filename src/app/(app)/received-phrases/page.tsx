import { getReceivedPhrases, Phrase } from '@/http/get-received-phrases';
import { redirect } from 'next/navigation';

export default async function ReceivedPhrases() {
  try {
    const { phrases } = await getReceivedPhrases();

    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Phrases
        </h2>

        <div className="space-y-3">
          {phrases.length > 0 ? (
            phrases.map((phrase: Phrase) => (
              <div
                key={phrase.id}
                className="p-4 bg-gray-100 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700 text-sm">{phrase.phrase}</p>
                <span className="text-xs text-gray-500">nois</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No phrases available.</p>
          )}
        </div>
      </div>
    );
  } catch {
    redirect('/auth/sign-in');
  }
}
