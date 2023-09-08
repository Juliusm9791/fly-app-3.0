'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { app } from '../../firebase-config';
import Link from 'next/link';

interface Hello {
  appName: String;
}

export default function HomePage() {
  const [name, setName] = useState<Hello>({ appName: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setLoading(false);
        setName(data);
      } catch (e) {
        console.error('Fetch hello error: ' + e);
      }
    })();
  }, []);

  return (
    <main>
      <div className="flex position:relative h-screen w-screen text-center">
        <div className="flex flex-col">
          {loading ? <p>Loading ...</p> : <p>{name.appName}</p>}
        </div>

        <div>
          <hr />
          <br />
          <Link href="/auth/signin-test">Sign In</Link>
          <hr />
          <br />
          <Link href="/auth/login-test">Login</Link>
        </div>
      </div>
    </main>
  );
}
