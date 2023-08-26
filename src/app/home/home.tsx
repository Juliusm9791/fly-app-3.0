'use client';
import React, { useState, useEffect, useCallback } from 'react';
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
      <div className="h-screen w-screen text-center">
        <div>{loading ? <p>Loading ...</p> : <p>{name.appName}</p>}</div>
      </div>
    </main>
  );
}
