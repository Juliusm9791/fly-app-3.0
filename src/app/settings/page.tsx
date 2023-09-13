'use client';
import React from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <>
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
        <p>Settings Page</p>
      </div>
    </>
  );
}
