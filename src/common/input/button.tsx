'use client';
import React from 'react';
interface Props {
  label: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}

export default function ButtonCommon({
  label,
  onButtonClick,
  disabled,
}: Props) {
  return (
    <div className="mt-4">
      <button
        className="rounded py-3 block w-40 text-center bg-gray-900 text-white hover:text-blue-300"
        onClick={onButtonClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}
