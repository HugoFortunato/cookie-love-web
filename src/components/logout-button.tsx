'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Redireciona para a rota de logout que limpa o cookie
    router.push('/api/auth/sign-out');
  };

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 p-2 text-gray-500 hover:text-red-500 transition-colors duration-200 z-50"
      title="Sair"
    >
      <LogOut size={20} />
    </button>
  );
}

