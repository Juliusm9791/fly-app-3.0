// HOME PAGE
"use client";
import React, { useState, useEffect } from "react";
import InputForm from "@/common/input/input-form";

export default function HomePage() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log(data);
      setName(data);
    })();
  }, []);
  const handleChange = () => {};

  return (
    <main className="flex-row">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl">FLY APP 3.0</h1>
        {/* <p>{name.appName}</p> */}
      </div>
      <div>
        <InputForm
          label="test"
          name="email"
          type="email"
          value=""
          onChange={handleChange}
          placeholder="email"
        ></InputForm>
      </div>
    </main>
  );
}
