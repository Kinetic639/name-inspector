"use client";

import React from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex-col mb-5">
      <p className="block">Error: {error.message}</p>
      <div className=" flex gap-5 mt-5">
        <Link
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          href="/"
        >
          Go Home
        </Link>
        <button
          onClick={reset}
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
export default Error;
