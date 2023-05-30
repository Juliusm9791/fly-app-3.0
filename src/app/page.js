"use client";
import Home from "./home/home.js";
import Registration from "./registration/registration.js";

export default function Main() {
  return (
    <main className="bg-gray-200">
      <Home />
      <Registration />
    </main>
  );
}
