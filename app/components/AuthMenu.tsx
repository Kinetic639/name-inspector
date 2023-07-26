"use client";

import React from "react";

import Link from "next/link";
import { useSession } from "next-auth/react";

const AuthMenu = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex items-center">
        <Link href="/api/auth/signout">{session.user.name}</Link>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <Link href="/api/auth/signin" className="block m-0">
          Sign In <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    );
  }
};

export default AuthMenu;
