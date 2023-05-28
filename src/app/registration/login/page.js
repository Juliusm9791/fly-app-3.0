import Link from "next/link";
import Nav from "../../components/nav/nav.js";

function Login() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-gray-300 rounded-lg w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-gray-300 rounded-lg w-full py-2 px-3"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <h5>
            Don&apos;t have an account? Click
            <Link href="/registration/signup"> here </Link>
            to sign up
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
