'use client';
import React, { useCallback, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import InputForm from '@/common/input/input-form';
import ButtonCommon from '@/common/input/button';
import { UserProfile } from '@/common/variable-types';
import Link from 'next/link';

export default function ProfileDash() {
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

  const handleSignOut = () => {
    try {
      signOut();
      console.log('Sign-out successful.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>User Dashboard</div>
      <div className="p-10 flex flex-col bg-gray-100 rounded mt-20">
        <div className="flex flex-row mb-4">
          <div>
            <img
              className="h-16 mr-4"
              src="../../../icons/user_profile.png"
              alt=""
            ></img>
          </div>

          <div className="flex flex-col mr-8 mb-8">
            {userProfile.email}
            {userProfile.firstName}
            {userProfile.lastName}
          </div>

          <div className="flex flex-col">
            <div className="text-white rounded bg-gray-600 p-2 mb-2">
              <p>$</p>
            </div>
            <div className="text-black text-xs">
              <Link className="pl-1 hover:text-blue-400" href="/transfers">
                Add funds
              </Link>
            </div>

            <div className="text-black text-xs">
              <Link className="pl-1 hover:text-blue-400" href="/profile/edit">
                Edit profile
              </Link>
            </div>

            <div className="text-black text-xs">
              <button
                className="pl-1 hover:text-blue-400"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
            <p>Notifications</p>
          </div>
          <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
            <p>Watchlist</p>
          </div>
          <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
            <p>Transactions</p>
          </div>
          <div className="flex flex-col rounded bg-gray-200 p-4 my-2">
            <p>Documents</p>
          </div>
        </div>
      </div>
    </>
  );
}
ProfileDash.requireAuth = true;
