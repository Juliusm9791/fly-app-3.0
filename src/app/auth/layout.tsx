'use client';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-auto text-center">{children}</div>;
}