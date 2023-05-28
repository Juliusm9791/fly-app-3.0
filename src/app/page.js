"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Home from "./home/home.js";

export default function Main() {
  const { data: session } = useSession();
  console.log("session ", session);
  // if (loading) {
  //   return (
  //     <>
  //       <main className="bg-gray-200">
  //         <Home />
  //         <h1>Loading ....</h1>
  //       </main>
  //     </>
  //   );
  // } {session.user.email}
  if (session && session.user) {
    return (
      <>
        <main className="bg-gray-200">
          <Home />
          <div className="mx-24">
            <h1>Signed in as </h1>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="bg-gray-200">
        <Home />
        <div className="mx-24">
          <h1>Not signed</h1>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </main>
    </>
  );
}
