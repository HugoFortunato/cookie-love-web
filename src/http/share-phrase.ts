import { cookies } from 'next/headers';

interface ShareYourPhraseRequest {
  recipientEmail: string;
  content: string;
}

export async function shareYourPhrase({
  recipientEmail,
  content,
}: ShareYourPhraseRequest) {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    throw new Error('Token não encontrado');
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/share-phrase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ recipientEmail, content }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
