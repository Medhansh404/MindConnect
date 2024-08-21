import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Appointment from "./Components/ChatAppntmnt";
// import "./App.css";
import './index.css'; 
import Faq from "./Components/Faq/Faq";
import DiaryPage from "./Components/DiaryEntry";
import Faq from "./Components/Faq/Faq";
import Blogs from "./Components/Blogs/Blogs";
import Diary from "./Components/Diary/Diary";
import './index.css'; 

const App = () => {
  return (
    
      <div className="app">
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/diary' element={<DiaryPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/diary" element={<Diary />} />
              
              {/*Protected Routes*/ }
              {/* <Route element={<RequireAuth allowedRoles={[2020, 2021, 2022, 2023]}/>}>
              <Route path="diary" element={<Dashboard />} />
              <Route path="blogs" element={<AddTrip />} />
              <Route path="chat" element={<Books />} />
              <Route path="help" element={<Update />} />
              <Route path="help" element={<Update />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={[2020, 20021, 2022]}/>}>
                <Route path="chat" element={<Update />} />
              </Route> */}
           

              {/* catch all*/}
              <Route path="*" element={<></>} />
          </Routes>
      
      </div>
    
  );
};

export default App;