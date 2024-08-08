import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
//import Request from "./Components/ApprovalRequests";
import Update from "./Components/Update";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import AddTrip from "./Components/AddTrip";
import Books from "./Components/Books"
import "./styles.css";
import RequireAuth from "./Components/RequireAuth";
const App = () => {
  return (
    <>
      <div className="app">
        
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="login" element={<Login />}/>
              
              {/*Protected Routes*/ }
              <Route element={<RequireAuth allowedRoles={[2020, 2021, 2022, 2023]}/>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addTrip" element={<AddTrip />} />
              <Route path="pending" element={<Books />} />
              <Route path="disapproved" element={<Update />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={[2020, 20021, 2022]}/>}>
                {/* <Route path="request" element={<Request />} /> */}
              </Route>
              <Route element={<RequireAuth allowedRoles={[2020, 2021]}/>}>
                <Route path="asstdirector" element={<Update />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={[2020]}/>}>
                <Route path="director" element={<Update />} />
              </Route>  
              

              {/* catch all*/}
              <Route path="*" element={<></>} />
            </Route>
          </Routes>
      
      </div>
    </>
  );
};

export default App;