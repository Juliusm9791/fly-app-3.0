// HOME PAGE
"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log(data);
      setName(data);
    })();
  }, []);

  return (
    <main className="flex-row">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl">FLY APP 3.0</h1>
        {/* <p>{name.appName}</p> */}
      </div>
    </main>
  );
}
