"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { FormEvent, useRef } from "react";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;

    if (!input) return;

    if (inputRef.current.value) {
      inputRef.current.value = "";
    }

    try {
      // call the api here
    } catch (error) {}
  };

  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          placeholder="search..."
          type="text"
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300 "
        />
        <button className="hidden">Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
      </form>
    </header>
  );
}

export default Header;