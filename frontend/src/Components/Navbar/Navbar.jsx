import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assests/logo1.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav
        data-component="Normal width: Navigation"
        className="absolute left-10 right-10 top-20 z-50 grid rounded-full text-darkBlue shadow-2xl bg-white"
      >
        <div className="container mx-auto flex justify-between items-center p-2">
          {/* Logo */}
          <a aria-label="Go to homepage" href="/">
            <img src={logo} alt="resume" 
            className="h-15 w-36 object-contain" 
            style={{ color: 'transparent' }} 
            loading="lazy"
            />
          </a>

          {/* Navigation Links */}
          <div className="laptop:flex space-x-4">
            <NavLink
              to="/blogs"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/diary"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Scribble
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Chat With Expert
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => 
                `text-md font-bold px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-yellow-500 text-white' : 'text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              LogIn
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
