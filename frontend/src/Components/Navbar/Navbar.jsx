import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from "../../assests/logo.png";
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
          className="h-10 w-25 object-contain" 
          style={{ color: 'transparent' }} 
             loading="lazy"
          />
        </a>

        {/* Navigation Links */}
        <div className="laptop:flex space-x-8">
          <a
            href="#about-us"
            className="link-container text-sm font-medium text-gray-700 transition-colors hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full"
          >
            About Us
          </a>
          <a
            href="#families"
            className="text-sm font-medium text-gray-700 transition-colors  hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full link-container"
          >
            For Families
          </a>
          <a
            href="#business"
            className="text-sm font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            For Business
          </a>
          <Link to = "/login" 
            className="text-sm font-bold text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition-colors link-container"
          >
            LogIn / Register
          </Link>
        </div>
        
      </div>
    </nav>
    </div>
   
  );
};

export default Navbar;
