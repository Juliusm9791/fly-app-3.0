// HOME PAGE
"use client";
import React, { useState, useEffect } from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/footer.js";

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
      <Nav />=
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl">MAIN CONTENT</h1>
        <p>{name.appName}</p>
      </div>
      <Footer />
    </main>
  );
}
