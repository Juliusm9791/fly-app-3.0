import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="group position:absolute z-10 items-center w-20 h-screen pl-1 pr-1 hover:w-40 sm:bg-gray-900">
      <Link className="group flex items-center w-full px-3 mt-6" href="/">
        <img className="mb-4 " src="/icons/fly_icon.svg" alt="flyapp_logo" />
      </Link>

      <div className="flex flex-row sm:flex-col w-full mt-3 border-t border-gray-700">
        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="mb-4 h-14 w-14 text-white hover:text-blue-400"
            src="/icons/search.svg"
            alt="search"
          />
          <span className="text-sm font-medium hidden group-hover:block text-white">
            Search
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="/auth/login"
        >
          <img
            className="mb-4 h-14 w-14 text-white"
            src="/icons/user.svg"
            alt="user"
          />
          <span className="text-sm font-medium text-white hidden group-hover:block">
            Profile
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="mb-4 h-14 w-14 text-white hover:text-blue-400"
            src="/icons/transfer.svg"
            alt="transfer"
          />
          <span className="text-sm font-medium hidden group-hover:block text-white">
            Payments
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="mb-4 h-14 w-14 text-white hover:text-blue-400"
            src="/icons/documents.svg"
            alt="documents"
          />
          <span className="text-sm font-medium hidden group-hover:block text-white">
            Documents
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 rounded text-white hover:text-blue-400"
          href="#"
        >
          <img
            className="mb-4 h-14 w-14 text-white hover:text-blue-400"
            src="/icons/settings.svg"
            alt="settings"
          />

          <span className="text-sm font-medium hidden group-hover:block text-white">
            Settings
          </span>
        </Link>
      </div>
    </nav>
  );
}
