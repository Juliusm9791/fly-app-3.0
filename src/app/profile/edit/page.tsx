'use client';
import React, { useCallback, useState } from 'react';
import { redirect } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import InputForm from '@/common/input/input-form';
import { UserProfile } from '@/common/variable-types';
import { useSession } from 'next-auth/react';
import ButtonSubmit from '@/common/input/button-submit';
import { useRouter } from 'next/navigation';

export default function ProfileEdit() {
  const router = useRouter();
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
        lastName: userProfile.lastName,
        avatar: '',
        address: userProfile.address,
        phone: userProfile.phone,
        emailVerified: userProfile.emailVerified,
      });
      console.log(res);
      console.log('Data added successful.');
    } catch (error) {
      console.error(error);
    } finally {
      router.push('/profile/dash');
    }
  };

  return (
    <>
      <div>Edit Profile</div>

      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmitProfile}
      >
        <div className="p-6 flex flex-col bg-gray-100 rounded mt-20">
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

          <ButtonSubmit label="Save"></ButtonSubmit>
        </div>
      </form>
    </>
  );
}
ProfileEdit.requireAuth = true;
