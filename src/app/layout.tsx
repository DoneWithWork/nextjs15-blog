import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DoneWithWork's Blog",
  description: "Simple NextJs-15 Blog made with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        `}
      >
        <nav className="w-full py-4 px-3 bg-blue-500 flex flex-row items-center justify-between ">
          <Link href={"/"} className="text-white text-3xl font-semibold ">
            DoneWithWork&apos;s Blog
          </Link>
        </nav>
        <div className="max-w-[1200px] mx-auto mt-10"> {children}</div>

        <footer className="px-4 w-full py-4 bg-gray-900">
          <p>DoneWithWork&apos;s Blog</p>
        </footer>
      </body>
    </html>
  );
}
