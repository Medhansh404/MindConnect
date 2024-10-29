import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Chat from "./Components/ChatLanding";
import UserChat from "./Components/UserChat";
import DocChat from "./Components/DocChat";

import Appointment from "./Components/Chat";
// import "./App.css";
import './index.css'; 
import Faq from "./Components/Faq/Faq";
import Blogs from "./Components/Blogs/Blogs";
import Diary from "./Components/Diary/Diary";
import './index.css'; 
import RequireAuth from "./Components/RequireAuth"
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar/Navbar";
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
            <Route path='profile' element={<Profile />} />

              
              {/*Protected Routes 1910: User */}
              <Route element={<RequireAuth allowedRoles={[1910]}/>}>
              <Route path="/diary" element={<Diary />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='userchat' element={<UserChat />} />
              <Route path='/appointment' element={<Appointment />} />
              </Route>           

              {/* 1911:Counselor */}
              <Route element={<RequireAuth allowedRoles={[1911]}/>}>
              <Route path="/docchat" element={<DocChat />} />
              <Route path='/chat' element={<Chat />} />
              
              </Route>

              {/* catch all*/}
              <Route path="*" element={<></>} />
          </Routes>
      
      </div>
    
  );
};

export default App;