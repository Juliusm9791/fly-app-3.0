'use client';
import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">
          <Nav />
          <div className="ml-40">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
