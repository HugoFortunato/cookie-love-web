import { BackButton } from '@/components/back-button';
import { LogoutButton } from '@/components/logout-button';

import { SharePhraseForm } from './share-phrase-form';

export default async function SharePhrase() {
  return (
    <>
      <BackButton />
      <LogoutButton />
      <SharePhraseForm />
    </>
  );
}
