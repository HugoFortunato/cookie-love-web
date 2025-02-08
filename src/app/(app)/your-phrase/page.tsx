// import { SheetYourPhrases } from '@/components/sheet-your-phrases';
import { getPhrase } from '@/http/get-phrase';
// import { getReceivedPhrases } from '@/http/get-received-phrases';
import { ArrowRight } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function YourPhrase() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { content } = await getPhrase();
  // const { phrases } = await getReceivedPhrases();

  const redirectToYourPhrases = async () => {
    'use server';

    redirect('/received-phrases');
  };

  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center h-screen text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-400">
        <span>{content}</span>

        <form action={redirectToYourPhrases}>
          <button
            type="submit"
            className="text-sm text-emerald-500 font-normal flex items-center"
          >
            <ArrowRight className="mr-2" />
            see your shared phrases
          </button>
        </form>

        {/* <SheetYourPhrases phrases={phrases} /> */}
      </div>

      <div></div>
    </>
  );
}
