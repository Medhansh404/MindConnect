import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assests/logo1.png";
import "./navbar.css";
import useAuth from '../../Hooks/useAuth';
import icon from "../../assests/menu.png";
import axios from "../../Api/axios";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const LOGOUT_URL = '/auth';
  // const { auth } = useAuth();
  const { setAuth,auth } = useAuth();
  const id = auth.id;
  const name = auth.userName;
  const roles = auth.roles;
  

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMenuToggle = () => {
    setToggleMenu(prev => !prev);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await axios.get(LOGOUT_URL, 
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true // Ensures cookies are sent
            }
        );
        if (response) {
            console.log("Logged Out Successfully");
            setIsDropdownOpen(false);
            setAuth({});  // Clear auth context or user state 
            navigate('/');  // Redirect to login page
        } else {
            console.log("Problem Logging Out");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setLoading(false);
    }
};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false); // Close the dropdown when clicked outside
      }
      if (!event.target.closest('.mobile')) {
        setToggleMenu(false); // Close the dropdown when clicked outside
      }
    };
    // handleMenuToggle();

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

 

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

          {/* Toggle button for mobile */}
          <div className="sm:hidden">
            <button onClick={handleMenuToggle} aria-label="Toggle menu">
              <img src={icon} alt="menu" className="mobile w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <NavLink to="/blogs" className={({ isActive }) =>
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              Blogs
            </NavLink>

            {roles == 1910 && (
              <NavLink to="/diary" className={({ isActive }) =>
                  `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                Scribble
              </NavLink>
            )}

            {!roles ? (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                Chat
              </NavLink>
            ) : roles == 1910 ? (
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
            ) : (
              <NavLink
                to="/docchat"
                className={({ isActive }) =>
                  `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                Chats
              </NavLink>
            )}


            <NavLink to="/about" className={({ isActive }) =>
                `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                  isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink to="/faq" className={({ isActive }) =>
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
              <NavLink to="/login" className={({ isActive }) =>
                  `text-md font-bold px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-yellow-500 text-white' : 'text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                LogIn
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        {toggleMenu && (
          <div className="sm:hidden absolute left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50">
            <ul className="space-y-4 py-4 px-6">
              <li>
                <NavLink to="/blogs" className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full">
                  Blogs
                </NavLink>
              </li>

              {roles == 1910 && (
                <li>
                  <NavLink to="/diary" className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full">
                    Scribble
                  </NavLink>
                </li>
              )}

                         {!roles ? (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                Chat
              </NavLink>
            ) : roles == 1910 ? (
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
            ) : (
              <NavLink
                to="/docchat"
                className={({ isActive }) =>
                  `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
                    isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                Chats
              </NavLink>
            )}


              <li>
                <NavLink to="/about" className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/faq" className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full">
                  FAQs
                </NavLink>
              </li>

              {id ? (
                <li>
                <button className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full">
                    <Link to = "/profile">
                     Profile
                     </Link>
                  </button>
                  <button className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full text-red-600"
                    onClick={handleLogout}>
                    Logout
                  </button>
                  
                </li>
              ) : (
                <li>
                  <NavLink to="/login" className="text-md font-bold hover:bg-gray-200 px-4 py-2 block rounded-full">
                    LogIn
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
        {isDropdownOpen && (
             <div className="absolute right-0 mt-14 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
               <ul className="dropdown">
                 <li>
                   <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg">
                     <Link to = "/profile">
                     Profile
                     </Link>
                   </button>
                 </li>
                 <li>
                   <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg"
                    onClick={handleLogout}>
                     Logout
                   </button>
                </li>
               </ul>
             </div>
           )}
      </nav>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { NavLink, Link } from "react-router-dom";
// import logo from "../../assests/logo1.png";
// import "./navbar.css";
// import useAuth from '../../Hooks/useAuth';
// import icon from "../../assests/menu.png";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [toggleMenu, settoggleMenu] = useState(false);



//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setIsDropdownOpen(false); // Close the dropdown when clicked outside
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);


//   const { auth } = useAuth();
//   const id = auth.id;
//   const name = auth.userName;
//   const roles = auth.roles;

//   return (
//     <div>
//       <nav
//         className="absolute left-10 right-10 top-20 grid rounded-full text-darkBlue shadow-2xl bg-white">
//         <div className="container mx-auto flex justify-between items-center p-2">
//           {/* Logo */}
//           <NavLink aria-label="Go to homepage" to="/">
//             <img src={logo} alt="resume" 
//               className="h-15 w-36 object-contain" 
//               style={{ color: 'transparent' }} 
//               loading="lazy"
//             />
//           </NavLink>

//           {/* Navigation Links */}
//           <div className="laptop:flex space-x-4">
//             <NavLink
//               to="/blogs"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               Blogs
//             </NavLink>

//             {roles == 1910 ? (
//             <NavLink
//               to="/diary"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               Scribble
//             </NavLink>) : 
//             (
//               <></>
//             )}

            
//             {roles == 1910 ? 
//                 (<NavLink
//               to="/chat"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               Chat With Expert
//             </NavLink>
//                  ) :(
//               <NavLink
//               to="/docchat"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               Chat
//             </NavLink>
//               )}

//             <NavLink
//               to="/about"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               About Us 
//             </NavLink>
//             <NavLink
//               to="/faq"
//               className={({ isActive }) => 
//                 `text-md font-medium px-4 py-2 rounded-full transition-colors link-container ${
//                   isActive ? 'bg-customYellow text-black font-semibold' : 'text-gray-700 hover:bg-blue-900 hover:text-white'
//                 }`
//               }
//             >
//               FAQs
//             </NavLink>

//             {id ? (
//               <div className="relative text-md font-bold px-4 py-2 rounded-full flex items-center link-container">
//                 <div onMouseEnter={handleMouseEnter}>
//                   <img src={icon} alt={name} className="w-6 h-6" />
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   `text-md font-bold px-4 py-2 rounded-full transition-colors link-container ${
//                     isActive
//                       ? 'bg-yellow-500 text-white'
//                       : 'text-gray-700 bg-customYellow hover:bg-blue-900 hover:text-white'
//                   }`
//                 }
//               >
//                 LogIn
//               </NavLink>
//             )}
//           </div>
//         </div>
//         <div>
                  
//           {isDropdownOpen && (
//             <div className="absolute right-0 -mt-3 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
//               <ul className="dropdown">
//                 <li>
//                   <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg">
//                     <Link to = "/profile">
//                     Profile
//                     </Link>
//                   </button>
//                 </li>
//                 <li>
//                   <button className="w-full text-left px-4 py-2 hover:bg-gray-400 text-black hover:rounded-lg">
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}

//           {toggleMenu && (<div className="sm:hidden absolute left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50">
//               <ul className="space-y-4 py-4 px-6">
//                 <li>
//                   <NavLink
//                     to="/blogs"
//                     className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                   >
//                     Blogs
//                   </NavLink>
//                 </li>

//                 {roles === 1910 && (
//                   <li>
//                     <NavLink
//                       to="/diary"
//                       className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                     >
//                       Scribble
//                     </NavLink>
//                   </li>
//                 )}

//                 {roles === 1910 ? (
//                   <li>
//                     <NavLink
//                       to="/chat"
//                       className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                     >
//                       Chat With Expert
//                     </NavLink>
//                   </li>
//                 ) : (
//                   <li>
//                     <NavLink
//                       to="/docchat"
//                       className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                     >
//                       Chat
//                     </NavLink>
//                   </li>
//                 )}

//                 <li>
//                   <NavLink
//                     to="/about"
//                     className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                   >
//                     About Us
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/faq"
//                     className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                   >
//                     FAQs
//                   </NavLink>
//                 </li>

//                 {id ? (
//                   <li>
//                     <button
//                       className="text-md font-medium hover:bg-gray-200 px-4 py-2 block rounded-full"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 ) : (
//                   <li>
//                     <NavLink
//                       to="/login"
//                       className="text-md font-bold hover:bg-gray-200 px-4 py-2 block rounded-full"
//                     >
//                       LogIn
//                     </NavLink>
//                   </li>
//                 )}
//               </ul>
//             </div> )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;