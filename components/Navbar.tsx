import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";

const Navbar = () => {
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
        <div className="flex items-center">
          <Link className="" href="/history">
            History
          </Link>
        </div>
        <Search />
        <button className="block m-0">
          Sign In <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
