import { cookies } from 'next/headers';

interface PhraseResponse {
  content: string;
}

export async function getPhrase(): Promise<PhraseResponse> {
  const token = (await cookies()).get('token')?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/phrase`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data: PhraseResponse = await res.json();

  return data;
}
