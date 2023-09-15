'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import { signIn } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { emailValidation } from '@/common/utils/validations';
import { LoginError, LoginForm } from '@/common/variable-types';
import { useRouter } from 'next/navigation';
import { defaultLoginVal, defaultLoginErrorVal } from '../auth-default-values';

export default function LoginPage() {
  const router = useRouter();
  const [inputForm, setInputForm] = useState<LoginForm>(defaultLoginVal);
  const [inputFormErrors, setInputFormErrors] =
    useState<LoginError>(defaultLoginErrorVal);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: LoginForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  // console.log(inputForm);

  const handleSubmit = () => {
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
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      if (
        inputFormErrors.emailError === '' &&
        inputFormErrors.passwordError.length === 0
      ) {
        signIn(
          'credentials',
          {
            email: inputForm.email,
            password: inputForm.password,
            redirect: false,
          },
          { prompt: 'login' },
        )
          .then((res) => {
            console.log(res);
            if (res?.ok) {
              router.push('/profile');
            } else {
              setInputFormErrors((prev) =>
                res?.error
                  ? {
                      ...prev,
                      emailError: res?.error,
                    }
                  : {
                      ...prev,
                      emailError: 'Login error, try again later',
                    },
              );
            }
          })
          .catch((er) => console.log(er));
      }
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted, inputForm, inputFormErrors]);

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
          error={inputFormErrors.emailError}
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={inputForm.password}
          onChange={handleInputFormChange}
          placeholder="Password"
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
        <Link className="pl-1 hover:text-blue-400" href="/auth/reset-password">
          Reset
        </Link>
        .
      </div>
    </>
  );
}
