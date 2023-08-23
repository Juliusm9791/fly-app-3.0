'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import React, { useCallback, useState } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [inputForm, setInputForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: LoginForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  // console.log(inputForm);

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <>
      <div>
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
      </div>
      <ButtonCommon label="Submit" onButtonClick={handleSubmit} />
    </>
  );
}
