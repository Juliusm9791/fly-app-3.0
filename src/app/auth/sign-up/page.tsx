'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import { signIn } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignupError, SignupForm } from '@/common/variable-types';
import Link from 'next/link';
import {
  emailValidation,
  passwordValidation,
} from '@/common/utils/validations';
import {
  defaultSignupVal,
  defaultSignupErrorVal,
} from '../auth-default-values';
import { firebaseErrorMsgSignupClean } from '@/common/utils/string-utils';

export default function SignupPage() {
  const router = useRouter();
  const [inputForm, setInputForm] = useState<SignupForm>(defaultSignupVal);
  const [inputFormErrors, setInputFormErrors] = useState<SignupError>(
    defaultSignupErrorVal,
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleInputFormChange = useCallback((value: string, name: string) => {
    setInputForm((prevForm: SignupForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleEmailSignIn = () => {
    const passwordErrors: string[] = passwordValidation(inputForm.password);
    console.log(inputForm);
    if (!emailValidation(inputForm.email)) {
      setInputFormErrors((prev) => ({
        ...prev,
        emailError: 'Email not valid.',
      }));
      return;
    } else {
      setInputFormErrors((prev) => ({
        ...prev,
        emailError: '',
      }));
    }
    if (passwordErrors.length !== 0) {
      setInputFormErrors((prev) => ({
        ...prev,
        passwordStringError: passwordErrors,
      }));
      return;
    } else {
      setInputFormErrors((prev) => ({
        ...prev,
        passwordStringError: [],
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
          { prompt: 'signup' },
        )
          .then((res) => {
            console.log(res);
            if (res?.error?.includes('EMAIL VERIFICATION SENT')) {
              alert('EMAIL VERIFICATION SENT');
              router.push('/auth/login');
            } else {
              setInputFormErrors((prev) =>
                res?.error
                  ? {
                      ...prev,
                      emailError: firebaseErrorMsgSignupClean(res?.error),
                    }
                  : {
                      ...prev,
                      emailError: 'Signup error, try again later.',
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
          error={inputFormErrors.emailError}
        ></InputForm>
        <InputForm
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          value={inputForm.passwordConfirm}
          onChange={handleInputFormChange}
          placeholder="Confirm password"
          error={inputFormErrors.emailError}
        ></InputForm>
        {inputFormErrors.passwordStringError.map((el) => (
          <p key={el} className="text-sm text-red-700">
            {el}
          </p>
        ))}
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
