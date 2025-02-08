import { cookies } from 'next/headers';

export interface Phrase {
  id: string;
  phrase: string;
}

interface ReceivedPhrases {
  phrases: Phrase[];
}

export async function getReceivedPhrases(): Promise<ReceivedPhrases> {
  const token = (await cookies()).get('token')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-received-phrases`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data: ReceivedPhrases = await res.json();

  return data;
}
