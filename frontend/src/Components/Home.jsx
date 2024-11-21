import {Link} from 'react-router-dom';
import React from "react";
import Blogs from "./Blogs/Blogs.jsx";
import Gyan from "./Gyan.jsx"
import Navbar from "./Navbar/Navbar.jsx";
import Tagline from "./Tagline.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Footer from "./Footer.jsx";
import useAuth from '../Hooks/useAuth.js';
import logo from "../assests/home_logo.png";

const Home = () =>{
  const {auth} = useAuth();
  const userName = auth.userName;

    return (
     
      <div> 
      
      {/* header */}
      <div className="pt-3 pb-3 text-center bg-white"> 
      {userName ? <span className='font-bold'>Welcome {userName}!!</span> : (
        <span><Link to = "/Register" className="font-bold">
        Sign up!</Link> Today to take control of your mental well-being!
      </span>
      )}
      
      </div>
      
      {/* Navbar */}
      <div className="h-auto bg-customYellow">
        <div className="p-16">
          <Navbar />
        </div>
        <Tagline />
        <div className="py-5 px-5 bg-customGreen"></div>
      </div>
      {/* <div> */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 bg-gray-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 text-center md:text-left">
            Latest Blogs
          </h1>
          <Link
            to="/blogs"
            className="text-purple-600 text-lg md:text-xl font-bold border border-purple-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
        <Blogs limit={3} />
      {/* </div> */}
     
      <Gyan />
      
      <br />
      <Testimonials />
      
      <div>
       <Footer />
      </div>
      </div>

       
      
      
    )
}

export default Home;

// import { Link } from 'react-router-dom';
// import React from "react";
// import Blogs from "./Blogs/Blogs.jsx";
// import Gyan from "./Gyan.jsx"
// import Navbar from "./Navbar/Navbar.jsx";
// import Tagline from "./Tagline.jsx";
// import Testimonials from "./Testimonials/Testimonials.jsx";
// import Footer from "./Footer.jsx";
// import useAuth from '../Hooks/useAuth.js';

// const Home = () => {
//   const { auth } = useAuth();
//   const userName = auth.userName;

//   return (
//     <div>
//       {/* Header */}
//       <div className="pt-3 pb-3 text-center bg-white">
//         {userName ? (
//           <span className='font-bold text-lg lg:text-xl'>Welcome {userName}!!</span>
//         ) : (
//           <span>
//             <Link to="/Register" className="font-bold text-lg lg:text-xl">
//               Sign up!
//             </Link>{" "}
//             Today to take control of your mental well-being!
//           </span>
//         )}
//       </div>

//       {/* Navbar */}
//       <div className="h-auto bg-customYellow">
//         <div className="p-6 md:p-8 lg:p-16">
//           <Navbar />
//         </div>
//         <Tagline />
//         <div className="py-3 md:py-5 px-3 md:px-5 bg-customGreen"></div>
//       </div>
      
//       {/* Main Content */}
//       <Blogs limit={3} />
//       <Gyan />
//       <br />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default Home;
