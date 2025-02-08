import { getReceivedPhrases, Phrase } from '@/http/get-received-phrases';

export default async function ReceivedPhrases() {
  const { phrases } = await getReceivedPhrases();

  return (
    <>
      {phrases.map((phrase: Phrase) => (
        <div key={phrase.id}>
          <p>{phrase.phrase}</p>
          <span>nois</span>
        </div>
      ))}
    </>
  );
}
