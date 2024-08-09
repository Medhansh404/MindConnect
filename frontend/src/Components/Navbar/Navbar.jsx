import React from 'react';

const Navbar = () => {
  return (
    <nav
      data-component="Normal width: Navigation"
      className="relative w-full z-50 bg-white text-darkBlue shadow-md rounded-navigation"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a aria-label="Go to homepage" href="/">
          <img
            src="frontend/assests/logo.jpeg"
            className="h-10 w-auto object-contain"
            alt='imgg'
          />
        </a>

        {/* Navigation Links */}
        <div className="laptop:flex space-x-8">
          <a
            href="#about-us"
            className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors"
          >
            About Us
          </a>
          <a
            href="#families"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            For Families
          </a>
          <a
            href="#business"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            For Business
          </a>
          <a
            href="/blogs/"
            className="text-sm font-medium text-gray-700 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Resources
          </a>
        </div>

      </div>
      
    </nav>
  );
};

export default Navbar;
