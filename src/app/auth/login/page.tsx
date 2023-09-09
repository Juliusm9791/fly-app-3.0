'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';

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
          error="email test error"
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={inputForm.password}
          onChange={handleInputFormChange}
          placeholder="password"
          error="pswd test error"
        ></InputForm>
      </div>
      <ButtonCommon label="Login" onButtonClick={handleSubmit} />
      <div className="text-black text-xs mt-4">
        New here?
        <Link className="px-1 hover:text-blue-400" href="/auth/sign-up">
          Sign-up
        </Link>
        instead.
      </div>
    </>
  );
}
