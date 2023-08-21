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
        className="rounded-md p-4 text-center bg-indigo-950 text-white"
        onClick={onButtonClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}
