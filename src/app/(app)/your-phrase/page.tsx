import { getPhrase } from '@/http/get-phrase';

export default async function YourPhrase() {
  const { content } = await getPhrase();

  return <span>{content}</span>;
}
