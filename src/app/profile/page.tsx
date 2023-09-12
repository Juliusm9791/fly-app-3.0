'use client';
import React, { useCallback, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import InputForm from '@/common/input/input-form';
import ButtonCommon from '@/common/input/button';
import { UserProfile } from '@/common/variable-types';

export default function ProfilePage() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin-test');
    },
  });
  const usersCollectionRef = collection(db, 'users');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    auth_uid: session?.user?.uid || '',
    role: '',
    email: session?.user?.email || '',
    firstName: '',
    middleName: '',
    lastName: '',
    avatar: '',
    address: '',
    phone: '',
    emailVerified: session?.user?.emailVerified || false,
  });

  const handleSignOut = () => {
    try {
      signOut();
      console.log('Sign-out successful.');
    } catch (error) {
      console.error(error);
    }
  };

  const handleProfileInput = useCallback((value: string, name: string) => {
    setUserProfile((prevForm: UserProfile) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  const handleSubmitProfile = () => {
    try {
      const res = addDoc(usersCollectionRef, {
        auth_uid: userProfile.email,
        role: '',
        email: userProfile.email,
        firstName: userProfile.firstName,
        middleName: '',
        lastName: '',
        avatar: '',
        address: '',
        phone: '',
        emailVerified: userProfile.emailVerified,
      });
      console.log(res);
      console.log('Data added successful.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>Profile Page</div>
      <div className="flex flex-col">
        <p>
          Signed in as: <i> {userProfile.email} </i>
        </p>
        <br />
        <p>
          UID: <i>{userProfile.auth_uid}</i>
        </p>
        <br />
        <p>
          emailVerified: <i>{userProfile.emailVerified && 'TRUE'}</i>
        </p>
        <br />

        <button onClick={handleSignOut}>Sign out</button>
      </div>
      <InputForm
        label="Name"
        value={userProfile.firstName}
        name="firstName"
        onChange={handleProfileInput}
      ></InputForm>
      <ButtonCommon
        label="Update Profile"
        onButtonClick={handleSubmitProfile}
      ></ButtonCommon>
    </>
  );
}
ProfilePage.requireAuth = true;
