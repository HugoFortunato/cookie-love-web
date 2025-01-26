import { isAuthenticated } from '@/auth/auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await isAuthenticated()) {
    redirect('/your-phrase');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-8xl overflow-hidden">{children}</div>
    </div>
  );
}
