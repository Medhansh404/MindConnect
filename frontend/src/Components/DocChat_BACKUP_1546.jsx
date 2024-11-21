import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import axios from '../Api/axios'
import Chat from './Chat'; // Import the Chat component


const CHAT_URL = '/chat'


const DocChat = () => {
  const [chats, setChats] = useState({});
  const [selectedChat, setSelectedChat] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  useEffect(() =>{
    const fetchChat = async() =>{
      try{
          const response = await axios.get(CHAT_URL,
            {
              withCredentials: true
            }
          );
      const filteredChats =  Object.values(response.data)
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
                  <h3 className="text-lg font-bold text-center">{chat.participants}</h3>
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
<<<<<<< HEAD
            // If a chat is selected, render the Chat component
            <div>
            <p>{selectedChat}</p>
=======
            <div> <p>
              {selectedChat.sessionId.toString()}
            </p> 
            
>>>>>>> 5d34302
            <Chat chatId={selectedChat} />
            </div>
          ) : (
            <p className="text-gray-700 text-center pt-20">Please select a chat to view</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default DocChat;
