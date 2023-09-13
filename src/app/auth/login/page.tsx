'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import {
  emailValidation,
  passwordValidation,
} from '@/common/utils/validations';
import { LoginForm } from '@/common/variable-types';

export default function LoginPage() {
  const [inputForm, setInputForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [inputFormErrors, setInputFormErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: LoginForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  // console.log(inputForm);

  const handleSubmit = () => {
    const passwordErrors: string[] = passwordValidation(inputForm.password);

    if (!emailValidation(inputForm.email)) {
      setInputFormErrors((prev) => ({
        ...prev,
        emailError: 'Email not valid',
      }));
    } else {
      setInputFormErrors((prev) => ({
        ...prev,
        emailError: '',
      }));
    }
    if (passwordErrors.length !== 0) {
      console.log(passwordErrors);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Link
          className="flex items-center justify-center mb-4 w-full sm:hidden"
          href="/"
        >
          <img
            className="h-14 w-14"
            src="/icons/fly_icon.svg"
            alt="flyapp_logo"
          />
        </Link>
        <div>
          <InputForm
            label="E-mail"
            name="email"
            type="email"
            value={inputForm.email}
            onChange={handleInputFormChange}
            placeholder="email"
            error={inputFormErrors.emailError}
          ></InputForm>
          <InputForm
            label="Password"
            name="password"
            type="password"
            value={inputForm.password}
            onChange={handleInputFormChange}
            placeholder="password"
            error={inputFormErrors.passwordError}
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
        <div className="text-black text-xs mt-2">
          Forgot password?
          <Link
            className="pl-1 hover:text-blue-400"
            href="/auth/reset-password"
          >
            Reset
          </Link>
          .
        </div>
      </div>
    </>
  );
}
