"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchName = (event: FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
    setSearchQuery("");
  };

  return (
    <form className="flex max-w-lg  items-center" onSubmit={handleSearchName}>
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search-input"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="border flex-1 bg-gray-100 border-gray-400 focus:bg-white text-sm rounded-lg focus:border-gray-500 block p-2.5 focus:outline-gray-400 focus:ring-gray-300"
        placeholder="Search Name..."
        required
      />
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        Search
      </button>
    </form>
  );
};
export default Search;
