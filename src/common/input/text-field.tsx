import React from 'react';

export type Props = {
  value: string;
  name?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange: (value: string, name: string) => void;
};

export default function TextField({
  value,
  name,
  type,
  placeholder,
  disabled,
  error,
  onChange,
}: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    onChange(value, name);
  };

  return (
    <div>
      <input
        disabled={disabled}
        name={name}
        type={type || 'text'}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded ${
          error ? 'border-red-700' : 'border-gray-300'
        } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      />
    </div>
  );
}
