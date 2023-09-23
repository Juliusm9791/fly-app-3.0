'use client';
import React from 'react';
import Link from 'next/link';
import { colors } from '@/common/colors';
import { menuItems } from './menu-items';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();

  return (
    <nav
      className={`absolute z-20 group flex-col items-center ${colors.navBackground} sm:h-screen sm:hover:w-40 max-sm:bottom-0 max-sm:w-full max-sm:h-16 max-sm:pt-0 max-sm:mt-0 `}
    >
      <Link className="flex items-center w-full pl-1.5 max-sm:hidden" href="/">
        <img
          className="my-2 pr-2 h-14 w-14"
          src="/icons/fly_icon.svg"
          alt="flyapp_logo"
        />
      </Link>

      <div className="relative flex flex-col w-full border-t border-gray-700 pl-1 max-sm:mt-4  max-sm:flex-row max-sm:border-none max-sm:bottom-0">
        {menuItems.map((menu) => (
          <Link
            key={menu.id}
            className="flex sm:items-center sm:p-4 max-sm:justify-around max-sm:w-full max-sm:pt-1"
            href={menu.link}
          >
            <div className="flex items-center mt-2 max-sm:mt-0">
              {menu.icon(
                path?.includes(menu.link) ? colors.iconSelectedColor : null,
              )}
              <span className="pl-4 text-white text-sm hidden sm:group-hover:block hover:text-blue-300 max-sm:collapse">
                {menu.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
