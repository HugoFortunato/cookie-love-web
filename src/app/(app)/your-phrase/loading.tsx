import Image from 'next/image';

import cookieLucky from '@/assets/cookie-lucky.gif';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={cookieLucky}
        alt="Animated Logo"
        className="hidden md:block h-auto w-45"
      />
    </div>
  );
}
