import { useState, useCallback } from 'react';
type Props = {
  label: string;
  options: any[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectDropdown({
  label,
  options,
  onChange,
  value,
}: Props) {
  const [selected, setSelected] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <select value={value} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
