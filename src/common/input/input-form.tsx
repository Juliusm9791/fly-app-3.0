'use client';
import React from 'react';
import TextField from './text-field';

interface Props {
  label?: string;
  type?: string;
  value: string;
  name?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;

  onChange: (value: any, data?: any) => void;
}

export default function InputForm({
  label,
  type,
  value,
  placeholder,
  name,
  error,
  disabled,
  onChange,
}: Props) {
  let errorField = `${error ? '' : 'mt-8'}`;
  return (
    <label className="block">
      <p className="text-gray-700 text-left">{label}</p>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={disabled}
      />
      <p className={`${error ? 'mt-0' : 'mt-6'} text-sm text-red-700`}>
        <span className={errorField}>{error}</span>
      </p>
    </label>
  );
}
