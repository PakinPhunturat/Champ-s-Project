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
  title: "Customer Management",
  description: "Customer Management System",
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

        <header className="flex justify-end items-center font-bold text-xl gap-4 p-4 bg-blue-100">
          <Link className="mr-auto" href="/customer">Home</Link>
          <div className="text-sm">
            Token: ({JSON.stringify(await token())?.slice(1,6)}...) <br />
            User:  {await getUserNameFromToken()}
          </div>

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
        <main className="min-h-[60vh] bg-blue-50">
          {children}
        </main>

        <footer>Copyright reserved</footer>
      </body>
    </html>
  );
}