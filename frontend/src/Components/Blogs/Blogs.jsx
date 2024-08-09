import React from "react";
import blog from "../../assests/blog.jpg";

const Blogs = () => {
  return (
    <div>
      <div className="py-5 px-5 bg-customGreen"></div>
      
      <div className="pt-10 bg-customBlue text-white">
        <div className="flex p-4">
          <div className="w-1/2 p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={blog}
            alt="err" 
            className="w-[638px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
          <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">Why online?</h1>
            <p className="relative top-8 text-left text-xl leading-8">
              Seeking help is a big step, and speaking to a GP or mental health professional can be difficult.<br/> <br/>
              After friends and family, the internet is the first place young people turn to for information and support.<br/> <br/>
              After friends and family, the internet is the first place young people turn to 
            </p>
          </div>
        </div>

        <div className="flex p-4">
        <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">Why online?</h1>
            <p className="relative top-8 text-left text-xl leading-8">
              Seeking help is a big step, and speaking to a GP or mental health professional can be difficult.<br/> <br/>
              After friends and family, the internet is the first place young people turn to for information and support.<br/> <br/>
              After friends and family, the internet is the first place young people turn to 
            </p>
          </div>
          <div className="w-1/2 p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={blog}
            alt="err" 
            className="w-[638px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
        </div>

        <div className="flex p-4">
        <div className="w-1/2 p-4 flex items-center justify-center rounded-3xl">
          <img 
            src ={blog}
            alt="err" 
            className="w-[638px] h-[386px] rounded-md"    
            />
            {/* <p className="text-center">Photo HERE</p> */}
          </div>
          <div className="w-1/2 items-center justify-center p-8">
            <h1 className="text-center text-customGreen text-5xl">Why online?</h1>
            <p className="relative top-8 text-left text-xl leading-8">
              Seeking help is a big step, and speaking to a GP or mental health professional can be difficult.<br/> <br/>
              After friends and family, the internet is the first place young people turn to for information and support.<br/> <br/>
              After friends and family, the internet is the first place young people turn to 
            </p>
          </div>
        </div>
      </div>
      <div className="bg-customGreen py-5 px-5"></div>
    </div>
  );
};

export default Blogs;
