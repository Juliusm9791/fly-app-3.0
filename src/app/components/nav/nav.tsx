import React from 'react';
import Link from 'next/link';
import { colors } from '@/common/colors';
import { menuItems } from './menu-items';

export default function Nav() {
  return (
    <nav
      className={`absolute pt-4 group flex-col items-center ${colors.navBackground} z-10 w-20 sm:h-screen sm:hover:w-44 max-sm:bottom-0 max-sm:w-full max-sm:h-20 max-sm:pt-0 max-sm:mt-0 max-sm:hover:w-full`}
    >
      <Link className="flex items-center w-full pl-4 max-sm:hidden" href="/">
        <img
          className="my-2 h-12 w-12"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="relative z-20 pt-4 flex flex-col w-full mt-3 border-t border-gray-700 max-sm:flex-row max-sm:border-none">
        {menuItems.map((menu) => (
          <Link
            key={menu.id}
            className="group flex items-center w-full pl-3 pr-1 h-16 mt-1 ml-3 rounded text-white max-sm:mt-0 max-sm:h-0"
            href={menu.link}
          >
            {menu.icon}
            <span className="mb-8 -ml-4 text-sm font-medium hidden group-hover:block text-white max-sm:collapse">
              {menu.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
