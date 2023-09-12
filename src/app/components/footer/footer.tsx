import React from 'react';

export default function Footer() {
  const currentDate = new Date();
  return (
    <h1 className="bottom-0 w-full py-4 bg-gray-100 text-xs text-gray-400 text-center absolute -z-1 max-[600px]:hidden">
      {`Fly App © ${currentDate.getFullYear()}`}
    </h1>
  );
}
