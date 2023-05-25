import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex-row">
      <Link href="/">

        {" "}
        <h1 className="px-2 py-4 bg-gray-800 text-gray-50">HOME</h1>

      </Link>

      <h1 className="px-2 py-4 bg-gray-800 text-gray-50">SEARCH</h1>

      <Link href="/registration/login">
        {" "}
        <h1 className="px-2 py-4 bg-gray-800 text-gray-50">PROFILE</h1>
      </Link>
    </nav>
  );
}
