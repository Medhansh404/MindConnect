// import {Outlet, Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";
import banner from "../../assests/banner_img.png";

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

        <section className="w-full text-darkBlue py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-6xl font-bold text-center">
            Virtual mental health care for kids &amp; families
          </h1>
          <p className="text-xl relative top-3">
            Whether it’s virtual therapy, psychiatry, or coaching — Brightline works with employers and major insurers nationwide to get families affordable, accessible support.
          </p>
          <a
            href="https://www.hellobrightline.com/employers/#employers-form"
            className="relative top-5 text-center text-2xl bg-white text-blue-900 font-bold py-5 px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
          >
            Bring Brightline to Your Team
          </a>
        </div>
        
        {/* Image Content */}
        <div className="relative left-20 right-20 flex justify-center">
          <img
            src={banner} // Replace with the actual path to your image
            alt="Brightline Session With Therapist"
            className="rounded-lg object-contain min-h-16"
          />
        </div>
        </div>
        </section>
        
      </div>
      
       {/* <div className="bg" style={background-color}></div> */}
        {/* <div>
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
      </div>     */}
      </div>
    )
}

export default Home;