import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register";

// import "./App.css";
import './index.css'; 
// import RequireAuth from "./Components/RequireAuth";
const App = () => {
  return (
    
      <div className="app">
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
              
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