import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from "../../assests/logo1.png";
import "./navbar.css";
import useAuth from '../../Hooks/useAuth';
import icon from "../../assests/menu.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false); // Close the dropdown when clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { auth } = useAuth();
  const id = auth.id;
  const name = auth.userName;

  return (
    <div>
      <nav className="absolute left-10 right-10 top-20 grid rounded-full text-darkBlue shadow-2xl bg-white">
        <div className="container mx-auto flex justify-between items-center p-2">
          {/* Logo */}
          <NavLink aria-label="Go to homepage" to="/">
            <img src={logo} alt="resume" 
              className="h-15 w-36 object-contain" 
              style={{ color: 'transparent' }} 
              loading="lazy"
            />
          </NavLink>

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
              to="/appointment"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Chat With Expert
            </NavLink>

            <NavLink
              to="/docchat"
              className={({ isActive }) => 
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Counselor Chat
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

            {id ? (
              <div className="relative text-md font-bold px-4 py-2 rounded-full flex items-center link-container">
                <div onMouseEnter={handleMouseEnter}>
                  <img src={icon} alt={name} className="w-6 h-6" />
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-md font-bold px-4 py-2 rounded-full transition-colors link-container ${
                    isActive
                      ? 'bg-yellow-500 text-white'
                      : 'text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                LogIn
              </NavLink>
            )}
          </div>
        </div>
        <div>
                  
          {isDropdownOpen && (
            <div className="absolute right-0 -mt-3 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="dropdown">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg">
                    <Link to = "/profile">
                    Profile
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
