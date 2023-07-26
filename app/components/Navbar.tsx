import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/components/Search";
import AuthMenu from "@/app/components/AuthMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between md:flex-row p-6">
      <Link href="/" className="w-fit">
        <Image
          src="/vercel.svg"
          alt="Logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <div className="flex gap-5">
        <div className="flex items-center gap-5">
          {session && (
            <Link className="" href="/history">
              History
            </Link>
          )}
        </div>
        <Search />
        <AuthMenu />
      </div>
    </nav>
  );
};
export default Navbar;
