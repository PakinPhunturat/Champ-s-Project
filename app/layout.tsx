import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { token, getUserNameFromToken } from "@/utils/manageCookie";
import Logout from "@/app/login/Logout";

const roboto = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "ToDo-List",
  description: "ToDo-List",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >

        <header className="flex justify-end items-center font-bold text-xl gap-4 p-4 bg-gradient-to-r from-sky-200 to-sky-500">
          <Link className="mr-auto" href="/pojek">Home</Link>
          {/* <div className="text-sm">
            Token: ({JSON.stringify(await token())?.slice(1,6)}...) <br />
            User:  {await getUserNameFromToken()}
          </div> */}

          {!(await token()) ? (
            <>
              <Link href="/login">Login</Link> |
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              <Logout />
            </>
          )}


        </header>
        <main className="min-h-[85vh] bg-gradient-to-r from-orange-50 to-lime-50">
          {children}
        </main>

        <footer className="p-4 flex justify-center flex-glow items-center bg-gradient-to-r from-sky-200 to-sky-500">Copyright reserved</footer>
      </body>
    </html>
  );
}