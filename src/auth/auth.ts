import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function isAuthenticated() {
  return !!(await cookies()).has('token');
}

export async function getCurrentOrg() {
  return (await cookies()).get('org')?.value ?? null;
}

export async function auth() {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect('/auth/sign-in');
  }

  redirect('/api/auth/sign-out');
}
