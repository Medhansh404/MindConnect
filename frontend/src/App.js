import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Chat from "./Components/ChatLanding";
import UserChat from "./Components/UserChat";
import DocChat from "./Components/DocChat";
// import "./App.css";
import './index.css'; 
import Faq from "./Components/Faq/Faq";
import Blogs from "./Components/Blogs/Blogs";
import Diary from "./Components/Diary/Diary";
import './index.css'; 
import RequireAuth from "./Components/RequireAuth"
import Profile from "./Components/Navbar/Profile";
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
            <Route path="/docchat" element={<DocChat />} />
            <Route path='profile' element={<Profile />} />
            
              
              {/*Protected Routes 1910: User*/ } 
              <Route element={<RequireAuth allowedRoles={[1910]}/>}>
              <Route path="/diary" element={<Diary />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='userchat' element={<UserChat />} />
              </Route>           

              {/* catch all*/}
              <Route path="*" element={<></>} />
          </Routes>
      
      </div>
    
  );
};

export default App;