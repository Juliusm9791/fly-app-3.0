import React from "react";
import TextField from "./text-field";

interface FormInputProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  type?: string;
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (value: any, data?: any) => void;
}

export default function InputForm({
  label,
  type,
  value,
  placeholder,
  name,
  onChange,
  ...props
}: FormInputProps) {
  return (
    <label className="block" {...props}>
      <p className="text-gray-700 text-left ">{label}</p>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </label>
  );
}
