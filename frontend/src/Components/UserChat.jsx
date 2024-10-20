import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Chat from "./Chat.jsx";
// import { Link } from 'react-router-dom';
import Footer from "./Footer.jsx";


const UserChat = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative p-16 bg-customYellow">
        <Navbar />
      </div>

      <Chat />

      
      <div>
       <Footer />
      </div>
    </div>
    
  );
};

export default UserChat;
