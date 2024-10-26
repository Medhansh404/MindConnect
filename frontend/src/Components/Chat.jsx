import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import io from "socket.io-client"; 
import useAuth from '../Hooks/useAuth';


const Chat = ({ sessionId = '613f8f8e3c6e2b001f012345' }) => {
  const [messages, setMessages] = useState([]);   // Holds messages
  const [userMessage, setUserMessage] = useState('');   // Current message typed by user
  const chatBoxRef = useRef(null);   // To scroll chat box
  const socketRef = useRef(null);    // For WebSocket connection
  const {auth} = useAuth();
  useEffect(() => {
    // Connect to the WebSocket server
    socketRef.current = io("http://localhost:8080");

    // Join the specific chat session room
    socketRef.current.emit('joinSession', sessionId);

    // Listen for incoming messages
    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, { ...message, sender: 'user' }]);
    });

    // Cleanup the socket connection on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []); 

  // Get formatted current time
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
  };

  // Handle sending the message
  const handleSendMessage = () => {
    console.log(messages)
    const senderId = auth.id
    if (userMessage.trim() !== '') {
      const messageData = {
        sessionId,         
        senderId,          
        content: userMessage,   
        time: getCurrentTime(), 
      };
      socketRef.current.emit('sendMessage', messageData);
      setUserMessage('');
    }
  };

  // Automatically scroll chat box to the bottom when new messages arrive
  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  return (
    <div>
      <div className="flex justify-between items-center pt-20 px-8 max-w-4xl mx-auto">
        <span className="font-extrabold text-xl">You are talking with Dr. Counselor Jain</span>
        <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Leave Chat</Link>
      </div>

      <div className="relative pt-2 text-white px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div ref={chatBoxRef} className="bg-white rounded-lg shadow-lg p-6 h-96 overflow-y-auto mb-4">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center">No messages yet</p>
            ) : (

              messages.map((message, index) => (
                <div key={index} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {/* <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div> */}
                  <div className={`${message.sender === 'user' ? 'bg-customYellow text-black' : 'bg-customBlue text-white'} rounded-lg p-3 max-w-xs`} style={{ wordBreak: 'break-word' }}>
                    <p>{message.content}</p>  {/* Changed to 'content' */}
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message"
              className="w-full p-3 rounded-l-lg bg-white border border-gray-300 text-gray-800 focus:outline-none"
            />
            <button onClick={handleSendMessage} className="bg-customYellow text-black p-3 rounded-r-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
