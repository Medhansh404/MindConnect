import {Link} from 'react-router-dom';
import React from "react";
import Blogs from "../Blogs/Blogs.jsx";
import Gyan from "../Gyan.jsx"
import Navbar from "../Navbar/Navbar.jsx";
import Tagline from "../Tagline/Tagline.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer.jsx";

const Home = () =>{
    return (
     
      <div> 
      
      {/* header */}
      <div className="pt-3 pb-3 text-center bg-white"> 
      <span><Link to = "/Register" className="font-bold">
        Sign up!</Link> Today to take control of your mental well-being!
      </span>
      </div>
      
      {/* Navbar */}
      <div className="h-auto bg-customYellow">
        <div className="p-16">
          <Navbar />
        </div>
        <Tagline />
        <div className="py-5 px-5 bg-customGreen"></div>
      </div>
      <Blogs />
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

 /* <div className="bg" style={background-color}></div> */
        /* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
              
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>     */