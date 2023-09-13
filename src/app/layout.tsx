import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import SessionProvider from '@/session-provider';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>
            <Nav />
            <div className="pt-4 flex justify-center items-center">
              {children}
            </div>
            <footer className="max-sm:hidden">
              <Footer />
            </footer>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
