import React from 'react';
import Link from 'next/link';
import { SearchIcon, SettinsIcon } from '@/common/icons';

export default function Nav() {
  return (
    <nav className="group flex-col items-center sm:bg-gray-900 position:absolute z-100 items-center w-20 h-screen hover:w-40">
      <Link className="flex items-center w-full px-3 mt-6" href="/">
        <img
          className="my-2 h-12 w-12 text-white hover:text-blue-400"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="pt-4 group flex flex-row sm:flex-col w-full mt-3 border-t border-gray-700">
        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <SearchIcon />
          <span className="mb-7 text-sm font-medium hidden group-hover:block text-white">
            Search
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="/auth/login"
        >
          <img
            className="flex items-center h-14 w-14 text-white"
            src="/icons/user.svg"
            alt="user"
          />
          <span className="mb-7 text-sm font-medium text-white hidden group-hover:block">
            Profile
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="flex items-center h-14 w-14 text-white hover:text-blue-400"
            src="/icons/transfer.svg"
            alt="transfer"
          />
          <span className="mb-7 text-sm font-medium hidden group-hover:block text-white">
            Payments
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="flex items-center h-14 w-14 text-white hover:text-blue-400"
            src="/icons/documents.svg"
            alt="documents"
          />
          <span className="mb-7 text-sm font-medium hidden group-hover:block text-white">
            Documents
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <SettinsIcon />

          <span className="mb-7 text-sm font-medium hidden group-hover:block text-white">
            Settings
          </span>
        </Link>
      </div>
    </nav>
  );
}
