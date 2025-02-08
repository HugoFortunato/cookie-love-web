import { getPhrase } from '@/http/get-phrase';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function YourPhrase() {
  await new Promise((resolve) => setTimeout(resolve, 6000));

  const { content } = await getPhrase();

  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center h-screen text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-400">
        <span>{content}</span>

        <Link
          href="/received-phrases"
          className="text-sm text-emerald-500 font-normal flex items-center"
        >
          <ArrowRight className="mr-2" />
          see your shared phrases
        </Link>
      </div>
    </>
  );
}
