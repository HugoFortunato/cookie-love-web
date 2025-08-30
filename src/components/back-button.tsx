'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 p-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 z-50"
      title="Voltar"
    >
      <ArrowLeft size={20} />
    </button>
  );
}

