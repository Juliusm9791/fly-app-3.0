'use client';
import React from 'react';
interface PropsSubmit {
  label: string;
  disabled?: boolean;
}
export default function ButtonSubmit({ label, disabled }: PropsSubmit) {
  return (
    <div className="mt-4">
      <input
        disabled={disabled ? disabled : false}
        type="submit"
        value={label}
        className="cursor-pointer rounded py-3 block w-40 text-center bg-gray-900 text-white hover:text-blue-300"
      ></input>
    </div>
  );
}
