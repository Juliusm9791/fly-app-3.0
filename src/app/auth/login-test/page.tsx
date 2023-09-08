'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import { signIn } from 'next-auth/react';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TestForm {
  email: string;
  password: string;
}

export default function TestLoginPage() {
  const router = useRouter();
  const [inputForm, setInputForm] = useState<TestForm>({
    email: '',
    password: '',
  });

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: TestForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleEmailSignIn = () => {
    console.log(inputForm);
    signIn(
      'credentials',
      {
        email: inputForm.email,
        password: inputForm.password,
        redirect: false,
        // callbackUrl: '/profile',
      },
      { prompt: 'login' },
    ).then((rez) => {
      console.log(rez);
      if (rez?.ok) {
        router.push('/profile');
      } else {
        console.log(rez?.error);
      }
    });
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
          placeholder="Email"
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={inputForm.password}
          onChange={handleInputFormChange}
          placeholder="Password"
        ></InputForm>
      </div>
      <ButtonCommon label="Submit" onButtonClick={handleEmailSignIn} />
      {/* 
      <ButtonCommon
        label="Sign in with google"
        onButtonClick={() => signIn('google')}
      /> */}
    </>
  );
}
