import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
<div className={`fixed top-0 left-0 w-full text-black shadow-md z-10 ${isScrolled ? 'bg-white' : 'bg-initialColor'}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">

        <div className="flex justify-between items-center">
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
              to="/aboutus"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button className="px-6 py-2 bg-red-500 hover:bg-green-600 font-semibold rounded hover:text-white">
              <NavLink
                to="/sign-in"
                activeClassName="text-gray-200"
                className="hogit sver:text-gray-200"
              >
                <span className="text-white"> Sign in</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="px-6 py-2 bg-red-500 hover:bg-green-600 font-semibold rounded hover:text-white">
              <NavLink
                to="/register"
                activeClassName="text-gray-200"
                className="hover:text-gray-200"
              >
                <span className="text-white"> Register</span>
              </NavLink>
            </button>
          </li>
        </ul>
        {/* Burger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />{" "}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
