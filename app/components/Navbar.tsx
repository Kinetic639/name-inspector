import React from "react";
import Link from "next/link";
import Search from "@/app/components/Search";
import AuthMenu from "@/app/components/AuthMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

const Navbar = async () => {
  return (
    <nav className="flex justify-between md:flex-row p-6">
      <Link
        href="/"
        className="inline-block item-center w-fit uppercase font-semibold text-2xl flex items-center"
      >
        Name Inspector
      </Link>
      <div className="flex gap-5">
        <Search />
        <AuthMenu />
      </div>
    </nav>
  );
};
export default Navbar;
