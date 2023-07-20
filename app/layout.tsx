import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Name Inspector App",
  description: "Find details about names!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-col space-y-5 sm:px-10 px-6">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
