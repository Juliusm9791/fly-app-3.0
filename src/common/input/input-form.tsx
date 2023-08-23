'use client';
import React from 'react';
import TextField from './text-field';

interface Props {
  label?: string;
  type?: string;
  value: string;
  name?: string;
  error?: string;
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
  onChange,
}: Props) {
  return (
    <label className="block">
      <p className="text-gray-700 text-left ">{label}</p>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <p>{error}</p>
    </label>
  );
}
