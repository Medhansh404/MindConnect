import React from "react";
import banner from "../../assests/banner.jpeg";

const Tagline = () =>{
    return (

        <section className="w-full text-darkBlue py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-6xl font-bold text-center">
          Empowering Mental Wellness In Students
          </h1>
          <p className="text-xl relative top-3">
          Whether it's breaking the stigma around mental health, offering anonymous expert support, or sharing inspiring blogs — MindConnect provides a safe, anonymous platform for college students to thrive.

          </p>
          <a
            href="https://www.hellobrightline.com/employers/#employers-form"
            className="relative top-5 text-center text-2xl bg-white text-blue-900 font-bold py-5 px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
          >
            Feeling Low :(
          </a>
        </div>
        
        {/* Image Content */}
        <div className="relative left-20 right-20 flex justify-center">
          <img
            src={banner} // Replace with the actual path to your image
            alt="Brightline Session With Therapist"
            className="rounded-3xl object-contain min-h-16 shadow-2xl shadow-black"
          />
        </div>
        </div>
        </section>

    );
}

export default Tagline;