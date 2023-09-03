import React from 'react';
import Link from 'next/link';
import {
  DocumentsIcon,
  SearchIcon,
  SettingsIcon,
  SettinsIcon,
  TransfersIcon,
  UserIcon,
} from '@/common/icons';

export default function Nav() {
  return (
    <nav className="pt-4 group flex-col items-center sm:bg-gray-900 absolute z-100 items-center w-20 h-screen hover:w-40">
      <Link className="flex items-center w-full pl-5" href="/">
        <img
          className="my-2 h-10 w-10 text-white hover:text-blue-400"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="pt-5 group flex flex-row sm:flex-col w-full mt-3 border-t border-gray-700">
        <Link
          className="group flex items-center w-full pl-3 pr-1 h-16 mt-1 ml-3 rounded text-white hover:text-blue-400"
          href="#"
        >
          <SearchIcon color="#60a5fa" />
          <span className="mb-8 -ml-4 text-sm font-medium hidden group-hover:block text-white">
            Search
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-18 pl-3 pr-2 ml-4 rounded text-white hover:text-blue-400"
          href="/auth/login"
        >
          <UserIcon color="#60a5fa" />
          <span className="mb-8 -ml-4 text-sm font-medium hidden group-hover:block text-white">
            Profile
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 ml-4 rounded text-white hover:text-blue-400"
          href="#"
        >
          <TransfersIcon color="#60a5fa" />
          <span className="mb-10 -ml-3 text-sm font-medium hidden group-hover:block text-white">
            Transfers
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-14 pl-3 pr-2 mt-2 ml-4 rounded text-white hover:text-blue-400"
          href="#"
        >
          <DocumentsIcon color="#60a5fa" />
          <span className="mb-11 -ml-4 text-sm font-medium hidden group-hover:block text-white">
            Documents
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 pl-3 pr-1 mt-2 ml-4 rounded text-white hover:text-blue-400"
          href="#"
        >
          <SettingsIcon color="#60a5fa" />
          <span className="mb-11 -ml-6 text-sm font-medium hidden group-hover:block text-white">
            Settings
          </span>
        </Link>
      </div>
    </nav>
  );
}
