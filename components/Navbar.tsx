import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full z-10">
      <nav className="mx-auto flex justify-between items-center py-6">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/vercel.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <button>
          Sign In <span aria-hidden="true">&rarr;</span>
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
