import React from 'react';
import Link from 'next/link';
import {
  DocumentsIcon,
  SearchIcon,
  SettingsIcon,
  TransfersIcon,
  UserIcon,
} from '@/common/icons';
import { comment } from 'postcss';
import { colors } from '@/common/colors';

export default function Nav() {
  return (
    <nav className="absolute pt-4 group flex-col items-center bg-gray-900 z-10 w-20 h-screen hover:w-44 max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:h-20 max-[600px]:pt-0 max-[600px]:mt-0 max-[600px]:hover:w-full">
      <Link
        className="flex items-center w-full pl-4 max-[600px]:hidden"
        href="/"
      >
        <img
          className="my-2 h-12 w-12"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="relative z-20 pt-4 flex flex-col w-full mt-3 border-t border-gray-700 max-[600px]:flex-row max-[600px]:border-none">
        <Link
          className="group flex items-center w-full pl-3 pr-1 h-16 mt-1 ml-3 rounded text-white max-[600px]:mt-0 max-[600px]:h-0"
          href="#"
        >
          <SearchIcon color={colors.iconColor} />
          <span className="mb-8 -ml-4 text-sm font-medium hidden group-hover:block text-white max-[600px]:collapse">
            Search
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-18 pl-3 pr-2 ml-4 rounded text-white hover:text-blue-400 max-[600px]:h-0"
          href="/auth/login"
        >
          <UserIcon color={colors.iconColor} />
          <span className="mb-8 -ml-4 text-sm font-medium hidden group-hover:block text-white max-[600px]:collapse">
            Profile
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 px-3 mt-2 ml-4 rounded text-white hover:text-blue-400 max-[600px]:h-0"
          href="#"
        >
          <TransfersIcon color={colors.iconColor} />
          <span className="mb-10 -ml-3 text-sm font-medium hidden group-hover:block text-white max-[600px]:collapse">
            Transfers
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-14 pl-3 pr-2 mt-2 ml-4 rounded text-white hover:text-blue-400 max-[600px]:h-0"
          href="#"
        >
          <DocumentsIcon color={colors.iconColor} />
          <span className="mb-11 -ml-4 text-sm font-medium hidden group-hover:block text-white max-[600px]:collapse">
            Documents
          </span>
        </Link>

        <Link
          className="group flex items-center w-full h-12 pl-3 pr-1 mt-2 ml-4 rounded text-white hover:text-blue-400 max-[600px]:h-0"
          href="#"
        >
          <SettingsIcon color={colors.iconColor} />
          <span className="mb-11 text-sm -ml-5 font-medium hidden group-hover:block text-white max-[600px]:collapse">
            Settings
          </span>
        </Link>
      </div>
    </nav>
  );
}
