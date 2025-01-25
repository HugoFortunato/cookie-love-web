import React from 'react';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AppLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode;
  sheet: React.ReactNode;
}>) {
  if (!(await cookies()).has('token')) {
    redirect('/auth/sign-in');
  }

  return (
    <>
      {children}
      {sheet}
    </>
  );
}
