'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import React, { useCallback, useState } from 'react';

export default function LoginPage() {
  const [inputForm, setInputForm] = useState({ email: '', password: '' });

  const handleInputFormChange = useCallback((value: string, id: string) => {
    setInputForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  }, []);
  console.log(inputForm);

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <>
      <form>
        <InputForm
          label="E-mail"
          name="email"
          type="email"
          value={inputForm.email}
          onChange={handleInputFormChange}
          placeholder="email"
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={inputForm.password}
          onChange={handleInputFormChange}
          placeholder="password"
        ></InputForm>
      </form>
      <ButtonCommon label="Submit" onButtonClick={handleSubmit} />
    </>
  );
}
