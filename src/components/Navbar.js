import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex justify-between items-center">
          {/* Burger Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                // If menu is open, show "X" icon
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-5.657-5.657-5.657 5.657a1 1 0 0 1-1.414-1.414l5.657-5.657-5.657-5.657a1 1 0 0 1 1.414-1.414l5.657 5.657 5.657-5.657a1 1 0 1 1 1.414 1.414l-5.657 5.657 5.657 5.657z"
                />
              ) : (
                // If menu is closed, show burger icon
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </div>

          <a href="/" className="font-semibold text-xl">
            VENTAL
          </a>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6`}
        >
          <li>
            <a href="/#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              Browse Cars
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              How it works
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              Help
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              Sign in
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-200">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
