import { LogoutButton } from '@/components/logout-button';
import { getPhrase } from '@/http/get-phrase';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function YourPhrase() {
  try {
    const { content } = await getPhrase();

    return (
      <>
        <LogoutButton />
        <div className="flex flex-col gap-1 items-center justify-center h-screen text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-400">
          <span className="text-center">{content}</span>

          <Link
            href="/received-phrases"
            className="text-sm text-emerald-500 font-normal flex items-center"
          >
            <ArrowRight className="mr-2" />
            see your shared phrases
          </Link>

          <Link
            href="/share-phrase"
            className="text-sm text-emerald-500 font-normal flex items-center"
          >
            want to share your phrase?
          </Link>
        </div>
      </>
    );
  } catch {
    redirect('/auth/sign-in');
  }
}
