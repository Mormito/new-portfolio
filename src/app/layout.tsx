import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Mormito Portfolio",
  description: "Developed by Mormito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full h-screen flex flex-col items-center py-5 antialiased font-googlesans bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
