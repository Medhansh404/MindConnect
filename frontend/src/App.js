import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Appointment from "./Components/Chat";
// import "./App.css";
import './index.css'; 
import Faq from "./Components/Faq/Faq";
import Blogs from "./Components/Blogs/Blogs";
import Diary from "./Components/Diary/Diary";
import './index.css'; 
import RequireAuth from "./Components/RequireAuth"
const App = () => {
  return (
    
      <div className="app">
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blogs" element={<Blogs />} />
              
              {/*Protected Routes*/ }
              <Route element={<RequireAuth allowedRoles={[1910]}/>}>
              <Route path="/diary" element={<Diary />} />
              <Route path='/appointment' element={<Appointment />} />
              </Route>           

              {/* catch all*/}
              <Route path="*" element={<></>} />
          </Routes>
      
      </div>
    
  );
};

export default App;