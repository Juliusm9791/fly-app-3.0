"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Registration() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  console.log("session ", session);
  console.log("status ", status);

  if (loading) {
    return (
      <>
        <div className="mx-24">
          <h1>Loading ....</h1>
        </div>
      </>
    );
  }
  if (session && session.user) {
    return (
      <>
        <div className="mx-24">
          <h1>Signed in as {session.user?.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  //signIn(["cognito"])
  return (
    <>
      <main className="bg-gray-200">
        <div className="mx-24">
          <h1>Not signed</h1>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </main>
    </>
  );
}
