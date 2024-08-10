// import {Outlet, Link} from 'react-router-dom';
import React from "react";
import Blogs from "../Blogs/Blogs.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Tagline from "../Tagline/Tagline.jsx";

const Home = () =>{
    return (
     
      <div> 
      
      {/* header */}
      <div className="pt-3 pb-3 text-center bg-white"> <span>BrightLife Kids is now live (and free!) for all California families Sign up for free 
          </span>
      </div>

      {/* Navbar */}
      <div className="h-auto bg-customYellow">
        <div className="p-16">
          <Navbar />
        </div>
        {/* Gyan */}
        <Tagline />
      </div>
      
      <Blogs />
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