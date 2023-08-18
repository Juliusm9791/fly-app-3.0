"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/nav/nav.js";
import Footer from "./components/footer/footer.js";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fly App",
//   description: "...",
//   icons: {
//     icon: "/flyapp.png",
//   },
// };
//refetchInterval={5 * 60}
export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Nav />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
