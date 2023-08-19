import React from "react";

export type TextFieldProps = {
  value: string;
  name?: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
};

export default function TextField({
  value,
  name,
  type,
  placeholder,
  onChange,
}: TextFieldProps) {
  const hInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    onChange(value, name);
  };

  return (
    <div>
      <input
        name={name}
        type={type || "text"}
        value={value}
        onChange={hInputChange}
        placeholder={placeholder}
        className="
          mt-1 block w-full rounded-md border-gray-300 
          shadow-sm focus:border-indigo-300 focus:ring 
          focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
}
