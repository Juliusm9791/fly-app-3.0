import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import SessionProvider from '@/session-provider';
import Link from 'next/link';

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
            <div>
              <div className="flex flex-col justify-center items-center">
                <Link
                  className="flex items-center justify-center w-full sm:hidden"
                  href="/"
                >
                  <img
                    className="h-14 w-14"
                    src="/icons/fly_icon.svg"
                    alt="flyapp_logo"
                  />
                </Link>

                {children}
              </div>
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
