import {Link} from 'react-router-dom';
import React from "react";
import Blogs from "./Blogs/Blogs.jsx";
import Gyan from "./Gyan.jsx"
import Navbar from "./Navbar/Navbar.jsx";
import Tagline from "./Tagline.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Footer from "./Footer.jsx";
import useAuth from '../Hooks/useAuth.js';

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
      <Blogs limit = {3} />
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
