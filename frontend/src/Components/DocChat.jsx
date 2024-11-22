import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import axios from '../Api/axios'
import Chat from './Chat'; // Import the Chat component
import { FaBeer, FaCat, FaDog, FaApple, FaCar, FaCoffee, FaRocket } from "react-icons/fa";

const CHAT_URL = '/chat'


const DocChat = () => {
  const [chats, setChats] = useState({});
  const [selectedChat, setSelectedChat] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  
// const IconGenerator = () => {
//   const [icon, setIcon] = useState(null);

//   const iconsList = [
//     <FaBeer key="beer" size={50} color="orange" />,
//     <FaCat key="cat" size={50} color="purple" />,
//     <FaDog key="dog" size={50} color="brown" />,
//     <FaApple key="apple" size={50} color="red" />,
//     <FaCar key="car" size={50} color="blue" />,
//     <FaCoffee key="coffee" size={50} color="black" />,
//     <FaRocket key="rocket" size={50} color="gray" />,
//   ];

//   const generateIcon = () => {
//     const randomIndex = Math.floor(Math.random() * iconsList.length);
//     setIcon(iconsList[randomIndex]);
//   };
const generateIcon = () => {
    const icons = [
    <FaBeer key="beer" size={30} color="orange" />,
    <FaCat key="cat" size={30} color="purple" />,
    <FaDog key="dog" size={30} color="brown" />,
    <FaApple key="apple" size={30} color="red" />,
    <FaCar key="car" size={30} color="blue" />,
    <FaCoffee key="coffee" size={30} color="black" />,
    <FaRocket key="rocket" size={30} color="gray" />,
  ];
  // const icons = [<FaBeer />, <FaCat />, <FaDog />];
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

  useEffect(() =>{
    const fetchChat = async() =>{
      try{
          const response = await axios.get(CHAT_URL,
            {
              withCredentials: true
            }
          );
      const filteredChats =  Object.values(response.data)
      filteredChats.forEach(values => {
        values.icons = generateIcon();
      });

      setChats(filteredChats)
      }
      catch(err){


      }
    };
    fetchChat()
  }, [])


  const toggleDropdown = (chatId) => {
    setDropdownVisible(dropdownVisible === chatId ? null : chatId);
  };


  // UseEffect to listen for clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownVisible(null); // Close the dropdown when clicked outside
      }
    };


    document.addEventListener('click', handleClickOutside);


    return () => {
      document.removeEventListener('click', handleClickOutside); // Clean up the event listener
    };
  }, []);


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative p-16 bg-customYellow">
        <Navbar />
      </div>


      <div className="container mx-auto p-6 flex">
        <div className="w-1/5 pr-4 pt-20">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Chat List</h2>
          <div className="space-y-4">
            {Array.isArray(chats) &&
           
            chats.map((chat) => (
              <div
                key={chat.sessionId.toString()}
                className={`border border-customBlue p-4 rounded-3xl cursor-pointer hover:bg-blue-200 relative dropdown
                  ${selectedChat === chat  ? 'bg-customYellow hover:bg-yellow-300' : 'bg-blue-100'}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-center">{chat.icons}</h3>
                  <div onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(chat.sessionId.toString());
                  }}>
                    <span className="text-xl cursor-pointer">⋮</span>
                  </div>
                </div>


                {/* Dropdown menu */}
                {dropdownVisible === chat.sessionId.toString() && (
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-10">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Resolve Chat
                      </li>
                      {/* <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        View Profile
                      </li> */}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        <div className="w-3/4">
          {selectedChat ? (

            // If a chat is selected, render the Chat component
           

           <Chat chatId={selectedChat} />
           
          ) : (
            <p className="text-gray-700 text-center pt-20">Please select a chat to view</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default DocChat;
