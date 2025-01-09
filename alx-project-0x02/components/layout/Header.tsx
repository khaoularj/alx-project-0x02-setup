import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 text-center bg-gray-900">
      <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Welcome to the Airbnb Project!
      </h1>
      <nav className="mt-4">
        <Link
          href="/home"
          className="mx-4 text-lg text-white hover:text-pink-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mx-4 text-lg text-white hover:text-pink-400"
        >
          About
        </Link>
        <Link
          href="/posts"
          className="mx-4 text-lg text-white hover:text-pink-400"
        >
          Posts
        </Link>
        <Link
          href="/users"
          className="mx-4 text-lg text-white hover:text-pink-400"
        >
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
