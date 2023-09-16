import { useState, useCallback } from 'react';
type Props = {
  label: string;
};

export default function checkBoxInput({ label }: Props) {
  const [checked, setChecked] = useState(false);

  const handleCheckedBox = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleCheckedBox} />
      {label}
    </label>
  );
}
