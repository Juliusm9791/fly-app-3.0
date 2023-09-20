'use client';
import React, { useCallback, useState } from 'react';
import { redirect } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import InputForm from '@/common/input/input-form';
import ButtonCommon from '@/common/input/button';
import { UserProfile } from '@/common/variable-types';
import { useSession } from 'next-auth/react';

export default function ProfileEdit() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login');
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
        lastName: userProfile.firstName,
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
      <div>Edit Profile</div>

      <div className="p-10 flex flex-col bg-gray-100 rounded mt-20">
        <InputForm
          label="Email"
          value={userProfile.email}
          name="Email"
          onChange={handleProfileInput}
        ></InputForm>

        <InputForm
          label="First Name"
          value={userProfile.firstName}
          name="firstName"
          onChange={handleProfileInput}
        ></InputForm>

        <InputForm
          label="Last Name"
          value={userProfile.lastName}
          name="lastName"
          onChange={handleProfileInput}
        ></InputForm>

        <InputForm
          label="Address"
          value={userProfile.address}
          name="address"
          onChange={handleProfileInput}
        ></InputForm>

        <InputForm
          label="Phone"
          value={userProfile.phone}
          name="phone"
          onChange={handleProfileInput}
        ></InputForm>

        <ButtonCommon
          label="Save"
          onButtonClick={handleSubmitProfile}
        ></ButtonCommon>
      </div>
    </>
  );
}
ProfileEdit.requireAuth = true;
