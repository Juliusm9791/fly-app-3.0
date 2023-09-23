'use client';
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { UserProfile } from '@/common/variable-types';
import Link from 'next/link';
import {
  DocumentsIcon,
  NotificationsIcon,
  TransfersIcon,
  WatchlistIcon,
  WishlistIcon,
} from '@/common/icons';
import { defaultProfileVal } from '../profile-default-values';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { ToastContainer, toast } from 'react-toastify';

export default function ProfileDash() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login');
    },
  });
  const [userProfile, setUserProfile] =
    useState<UserProfile>(defaultProfileVal);

  useEffect(() => {
    (async function getUserData() {
      if (session?.user.uid) {
        const docRef = doc(db, 'users', session?.user.uid);
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
      } else toast.error('User data not found');
    })();
  }, []);

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

      {status === 'loading' ? (
        <div>...loading</div>
      ) : (
        <div className="p-6 flex flex-col bg-gray-100 rounded mt-20">
          <div className="flex flex-row">
            <div>
              <img
                className="h-16 mr-4"
                src="../../../icons/user_profile.png"
                alt=""
              ></img>
            </div>

            <div className="flex flex-col mr-8 mb-8">
              <p className="text-xs">
                {userProfile.email}
                {userProfile.firstName}
                {userProfile.lastName}
              </p>
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
              <div className="flex flex-row items-center">
                <NotificationsIcon
                  color={'bg-gray-100'}
                  width="18"
                  height="18"
                />
                <p className="ml-3 text-sm">Notifications</p>
              </div>
              <div className="mt-2">
                <p className="text-xs">test</p>
              </div>
            </div>

            <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
              <div className="flex flex-row items-center">
                <WatchlistIcon color={'bg-gray-100'} width="20" height="20" />
                <p className="ml-3 text-sm">Watchlist</p>
              </div>
              <div className="mt-2">
                <p className="text-xs">test</p>
              </div>
            </div>

            <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
              <div className="flex flex-row items-center">
                <WishlistIcon color={'bg-gray-100'} width="16" height="16" />
                <p className="ml-3 text-sm">Wishlist</p>
              </div>
              <div className="mt-2">
                <p className="text-xs">test</p>
              </div>
            </div>

            <div className="flex flex-col rounded bg-gray-200 p-4 my-4">
              <div className="flex flex-row items-center">
                <TransfersIcon color={'bg-gray-100'} width="20" height="20" />
                <p className="ml-3 text-sm">Transfers</p>
              </div>
              <div className="mt-2">
                <p className="text-xs">test</p>
              </div>
            </div>

            <div className="flex flex-col rounded bg-gray-200 p-4 my-2">
              <div className="flex flex-row items-center">
                <DocumentsIcon color={'bg-gray-100'} width="20" height="20" />
                <p className="ml-3 text-sm">Documents</p>
              </div>
              <div className="mt-2">
                <p className="text-xs">test</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}
ProfileDash.requireAuth = true;
