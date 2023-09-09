'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ProfilePage() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin-test');
    },
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
      <div>Profile Page</div>
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={handleSignOut}>Sign out</button>
      </>
    </>
  );
}
ProfilePage.requireAuth = true;
