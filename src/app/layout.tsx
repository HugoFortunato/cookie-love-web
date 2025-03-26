import './globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

import type { Metadata } from 'next';
import { Providers } from './providers';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ToastContainer />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
