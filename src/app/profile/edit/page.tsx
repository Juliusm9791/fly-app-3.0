'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import InputForm from '@/common/input/input-form';
import { UserProfile } from '@/common/variable-types';
import { useSession } from 'next-auth/react';
import ButtonSubmit from '@/common/input/button-submit';
import { useRouter } from 'next/navigation';
import { defaultProfileVal } from '../profile-default-values';
import { ToastContainer, toast } from 'react-toastify';

export default function ProfileEdit() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login');
    },
  });
  const usersCollectionRef = collection(db, 'users');
  const [userProfile, setUserProfile] =
    useState<UserProfile>(defaultProfileVal);

  useEffect(() => {
    (async function getUserData() {
      if (session?.user.uid) {
        const docRef = doc(db, 'users', session.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data());
          setUserProfile({
            role: docSnap.data().role,
            email: docSnap.data().email,
            firstName: docSnap.data().firstName,
            middleName: docSnap.data().middleName,
            lastName: docSnap.data().lastName,
            avatar: docSnap.data().avatar,
            address: docSnap.data().address,
            phone: docSnap.data().phone,
          });
        } else {
          console.error('No such document!');
        }
      } else alert('User data not found');
    })();
  }, []);

  const handleProfileInput = useCallback((value: string, name: string) => {
    setUserProfile((prevForm: UserProfile) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleSubmitProfile = async (event: any) => {
    event.preventDefault();
    try {
      if (session?.user.uid) {
        const res = await updateDoc(doc(usersCollectionRef, session.user.uid), {
          firstName: userProfile.firstName,
          middleName: userProfile.middleName,
          lastName: userProfile.lastName,
          avatar: userProfile.avatar,
          address: userProfile.address,
          phone: userProfile.phone,
        });
      }
      toast.success('User data updated successful.', {
        onClose: () => {
          router.push('/profile/dash');
        },
      });
    } catch (error) {
      console.error(error);
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
      <ToastContainer autoClose={2000} />
    </>
  );
}
ProfileEdit.requireAuth = true;
