'use client';
import ButtonCommon from '@/common/input/button';
import InputForm from '@/common/input/input-form';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { emailValidation } from '@/common/utils/validations';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase-config';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailErrors] = useState<string>('');
  const router = useRouter();
  const handleInputChange = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSubmit = async () => {
    if (!emailValidation(email)) {
      setEmailErrors('Email address is not valid');
    } else {
      try {
        const res = await sendPasswordResetEmail(auth, email);
        console.log(JSON.stringify(res));
        setEmailErrors('');
        router.push('/auth/login');
      } catch (e: any) {
        setEmailErrors(e.code);
      }
    }
  };

  return (
    <>
      <div>
        <InputForm
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email"
          error={emailError}
        ></InputForm>
      </div>
      <ButtonCommon
        label="Reset Password"
        onButtonClick={handleSubmit}
        // disabled={!emailValidation(email)}
      />
      <div className="text-black text-xs mt-4">
        Back to
        <Link className="px-1 hover:text-blue-400" href="/auth/login">
          Login.
        </Link>
      </div>
    </>
  );
}
