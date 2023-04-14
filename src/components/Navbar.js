import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full text-black shadow-md z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex justify-between items-center">
          {/* Burger Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* ... */}
          </div>

          <NavLink to="/" className="font-semibold text-3xl text-red-500">
            RoadReady
          </NavLink>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 items-center`}
        >
          <li>
            <NavLink
              to="/"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Browse Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <button class="border-2 border-red-500 p-2">
              <NavLink
                to="/register"
                activeClassName="text-gray-200"
                className="hover:text-gray-200 text-red-500"
              >
                Register
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
