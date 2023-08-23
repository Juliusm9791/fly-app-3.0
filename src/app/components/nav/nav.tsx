import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav
      id="fullNav"
      className="absolute top-0 flex flex-col items-center w-16 hover:w-40 h-full overflow-hidden text-white bg-gray-900 z-20 pl-1"
    >
      <Link className="flex items-center w-full px-3 mt-6" href="#">
        <img className="mb-4" src="/icons/fly_icon.svg" alt="flyapp_logo" />
        <span className="ml-2 text-sm font-medium hidden">Fly App</span>
      </Link>

      <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <img className="mb-4" src="/icons/search_icon.svg" alt="search" />
          <span className="ml-2 text-sm font-medium hidden">Search</span>
        </Link>

        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <svg
            className="h-6 w-6 ml-1 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 text-sm font-medium hidden">Profile</span>
        </Link>

        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <svg
            className="h-6 w-6 ml-1 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M3 9l4-4l4 4m-4 -4v14" />{' '}
            <path d="M21 15l-4 4l-4-4m4 4v-14" />
          </svg>
          <span className="ml-2 text-sm font-medium hidden">Payments</span>
        </Link>

        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <svg
            className="h-6 w-6 ml-1 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <rect x="3" y="4" width="18" height="16" rx="3" />{' '}
            <circle cx="9" cy="10" r="2" />{' '}
            <line x1="15" y1="8" x2="17" y2="8" />{' '}
            <line x1="15" y1="12" x2="17" y2="12" />{' '}
            <line x1="7" y1="16" x2="17" y2="16" />
          </svg>
          <span className="ml-2 text-sm font-medium hidden">Documents</span>
        </Link>

        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <svg
            className="h-6 w-6 ml-1 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{' '}
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="ml-2 text-sm font-medium hidden">Settings</span>
        </Link>
      </div>
    </nav>
  );
}
