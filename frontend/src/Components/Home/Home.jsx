// import {Outlet, Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";

const Home = () =>{
    return (
     
      <div> 
      <div>
        <Navbar />
      </div>
       
      <div className="bg-blue-200 py-5 px-5"></div>
      <div className="bg-yellow-200">
        <div className="flex p-4">
          <div className="w-1/2 p-4 flex items-center justify-center rounded-md ">
            <p className ="text-center">Photo HERE</p>
          </div>
          <div className= "w-1/2 items-center justify-center p-8">
            <h1 className="text-centre">Why online?</h1>
          <p className="text-centre">Seeking help is a big step, and speaking to a GP or mental health professional can be difficult. 
After friends and family, the internet is the first place young people turn to for information and support.</p>
        </div>
        </div>
      </div>
      <div className="bg-yellow-200">
        <div className="flex p-4">
          <div className= "w-1/2 items-center justify-center p-8">
            <h1 className="text-centre">Why online?</h1>
          <p className="text-centre">Seeking help is a big step, and speaking to a GP or mental health professional can be difficult. 
After friends and family, the internet is the first place young people turn to for information and support.</p>
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center rounded-md ">
            <p className ="text-center">Photo HERE</p>
          </div>
        </div>
      </div>
            <div className="bg-yellow-200">
        <div className="flex p-4">
          <div className="w-1/2 p-4 flex items-center justify-center rounded-md ">
            <p className ="text-center">Photo HERE</p>
          </div>
          <div className= "w-1/2 items-center justify-center p-8">
            <h1 className="text-centre">Why online?</h1>
          <p className="text-centre">Seeking help is a big step, and speaking to a GP or mental health professional can be difficult. 
After friends and family, the internet is the first place young people turn to for information and support.</p>
        </div>
        </div>
      </div>
      <div className="bg-blue-200 py-5 px-5"></div>
      </div>
      
    )
}

export default Home;