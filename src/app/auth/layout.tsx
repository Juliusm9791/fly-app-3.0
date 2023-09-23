'use client';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 flex flex-col w-60 m-auto items-center">
      {children}
    </div>
  );
}
