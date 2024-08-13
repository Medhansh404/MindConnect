import React from "react";
import why from "../assests/why.jpeg";
import stigma from "../assests/stigma.jpeg";
import stud from "../assests/stud.jpeg";

const Blogs = () => {
  return (
    <div>
      <div className="py-5 px-5 bg-customGreen"></div>
      
      <div className="pt-10 bg-customBlue text-white pb-9">
        <div className="flex p-4">
          <div className="w-1/2 p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={why}
            alt="err" 
            className="w-[500px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
          <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">Why Mental Health?</h1>
            <p className="relative top-8 text-left text-xl leading-8">
            Mental health encompasses our emotional, psychological, and social well-being, influencing how we think, feel, and act. It affects our ability to handle stress, build relationships, and make decisions. 
            <br/> <br/>Good mental health is more than the absence of illness; it's about resilience, self-esteem, and overall life satisfaction, requiring care and support throughout life.

            </p>
          </div>
        </div>

        <div className="flex p-4">
        <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">Social Stigma</h1>
            <p className="relative top-8 text-left text-xl leading-8 pl-20">
            Certain cultures hold misconceptions about mental health. Some
            individuals may believe that having mental health problems indicates a
            flaw in your character or morality. 
            <br/> <br/>These attitudes can further complicate
            one' ability to communicate their emotions and access necessary
            assistance.
 
            </p>
          </div>
          <div className="w-1/2  p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={stigma}
            alt="err" 
            className="w-[500px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
        </div>

        <div className="flex p-4">
        <div className="w-1/2 p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={stud}
            alt="err" 
            className="w-[500px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
          <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">For College Students</h1>
            <p className="relative top-8 text-left text-xl leading-8">
            Mental health in college can be challenging because multiple changes like
leaving home, forming new relationships, managing a hectic schedule, and
handling difficult classes can all happen simultaneously. 
<br/> <br/>It's similar to attempting to juggle multiple balls simultaneously – maintaining
equilibrium can be challenging. A lot of students struggle with that.
 
            </p>
          </div>
        </div>
      </div>
      <div className="bg-customGreen py-5 px-5"></div>
    </div>
  );
};

export default Blogs;
