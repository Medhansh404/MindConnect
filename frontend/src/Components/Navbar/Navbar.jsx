import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/logo1.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
    <nav
      data-component="Normal width: Navigation"
      className="absolute left-10 right-10 top-20 z-50 grid rounded-full text-darkBlue shadow-md bg-white"
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
          <a
            href="#about-us"
            className="link-container text-md font-medium text-gray-700 transition-colors hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full"
          >
            Blogs
          </a>
          <a
            href="#families"
            className="text-md font-medium text-gray-700 transition-colors  hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full link-container"
          >
            Scribble
          </a>
          <a
            href="#business"
            className="text-md font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            Chat With Expert
          </a>
          <a
            href="#business"
            className="text-md font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            About Us
          </a>
          <a
            href="#business"
            className="text-md font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            FAQs
          </a>
          <Link to = "/login" 
            className="text-md font-bold text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            LogIn
          </Link>
        </div>
        
      </div>
    </nav>
    </div>
   
  );
};

export default Navbar;
