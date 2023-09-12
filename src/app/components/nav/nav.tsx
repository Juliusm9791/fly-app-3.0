import React from 'react';
import Link from 'next/link';
import { colors } from '@/common/colors';
import { menuItems } from './menu-items';

export default function Nav() {
  return (
    <nav
      className={`absolute z-20 group flex-col items-center ${colors.navBackground} sm:h-screen sm:hover:w-44 max-sm:bottom-0 max-sm:w-full max-sm:h-16 max-sm:pt-0 max-sm:mt-0 `}
    >
      <Link className="flex items-center w-full pl-1.5 max-sm:hidden" href="/">
        <img
          className="my-2 h-12 w-12"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="relative flex flex-col w-full max-sm:mt-4 border-t border-gray-700 max-sm:flex-row max-sm:border-none">
        {menuItems.map((menu) => (
          <Link
            key={menu.id}
            className="flex sm:items-center sm:p-4 max-sm:justify-around max-sm:w-full"
            href={menu.link}
          >
            <div className="flex items-center">
              {menu.icon}
              <span className="pl-4 text-sm hidden sm:group-hover:block text-white max-sm:collapse">
                {menu.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
