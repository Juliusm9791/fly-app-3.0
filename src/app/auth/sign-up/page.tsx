'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import { signIn } from 'next-auth/react';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignupForm } from '@/common/variable-types';
import Link from 'next/link';

export default function signupPage() {
  const router = useRouter();
  const [inputForm, setInputForm] = useState<SignupForm>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: SignupForm) => ({
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
      },
      { prompt: 'signup' },
    ).then((res) => {
      console.log('signup ', res);
      if (res?.ok) {
        router.push('/auth/login');
      } else {
        console.log(res?.error);
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
          placeholder="E-mail"
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={inputForm.password}
          onChange={handleInputFormChange}
          placeholder="Password"
        ></InputForm>
        <InputForm
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          value={inputForm.passwordConfirm}
          onChange={handleInputFormChange}
          placeholder="Confirm password"
        ></InputForm>
      </div>
      <ButtonCommon label="Submit" onButtonClick={handleEmailSignIn} />
      <div className="text-black text-xs mt-4">
        Back to
        <Link className="pl-1 hover:text-blue-400" href="/auth/login">
          login
        </Link>
        .
      </div>
    </>
  );
}
