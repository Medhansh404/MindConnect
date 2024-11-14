import React from "react";
import banner from "../assests/banner.jpeg";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Tagline = () => {
  const { auth } = useAuth();
  const roles = auth.roles;

  return (
    <section className="w-full text-darkBlue py-8 px-4 md:py-16 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Mental Wellness In Students
          </h1>
          <p className="text-lg md:text-xl mt-2 md:mt-3">
            Whether it's breaking the stigma around mental health, offering
            anonymous expert support, or sharing inspiring blogs — MindConnect
            provides a safe, anonymous platform for college students to thrive.
          </p>
          {roles === 1911 ? (
            <Link
              to="/docchat"
              className="mt-4 md:mt-5 text-center text-lg md:text-2xl bg-white text-blue-900 font-bold py-3 px-4 md:py-5 md:px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Help Students
            </Link>
          ) : (
            <Link
              to="/chat"
              className="mt-4 md:mt-5 text-center text-lg md:text-2xl bg-white text-blue-900 font-bold py-3 px-4 md:py-5 md:px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Feeling Low
            </Link>
          )}
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Brightline Session With Therapist"
            className="w-80 h-auto md:w-full rounded-3xl object-cover shadow-2xl shadow-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Tagline;

// import React from "react";
// import banner from "../assests/banner.jpeg";
// import { Link } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// const Tagline = () =>{
//   const {auth} = useAuth();
//   const roles = auth.roles;
//     return (

//         <section className="w-full text-darkBlue py-16 px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
//         {/* Text Content */}
//         <div className="flex flex-col justify-center gap-6">
//           <h1 className="text-6xl font-bold text-center">
//           Empowering Mental Wellness In Students
//           </h1>
//           <p className="text-xl relative top-3">
//           Whether it's breaking the stigma around mental health, offering anonymous expert support, or sharing inspiring blogs — MindConnect provides a safe, anonymous platform for college students to thrive.

//           </p>
//           {roles == 1911 ? (
//             <Link to = "/docchat" className="relative top-5 text-center text-2xl bg-white text-blue-900 font-bold py-5 px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300">Help Students </Link>
//            ) :
//           (
//             <Link to ="/chat"

//             className="relative top-5 text-center text-2xl bg-white text-blue-900 font-bold py-5 px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
//           >
//             Feeling Low
//           </Link>
            
//           )}
//         </div>
        
//         {/* Image Content */}
//         <div className="relative left-20 right-20 flex justify-center">
//           <img
//             src={banner} 
//             alt="Brightline Session With Therapist"
//             className="rounded-3xl object-contain min-h-16 shadow-2xl shadow-black"
//           />
//         </div>
//         </div>
//         </section>

//     );
// }

// export default Tagline;