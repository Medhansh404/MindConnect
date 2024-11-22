import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import useAuth from '../Hooks/useAuth';


const Chat = (docChatId) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState(''); 
  const[id, setdocId] = useState(); 
  const chatBoxRef = useRef(null);  
  const socketRef = useRef(null);
  const [sessionId, setId] = useState('')  
  const {auth} = useAuth();
  
  useEffect(() =>{
    setMessages([]);
  }, [docChatId, id])

  useEffect(() =>{
    if(auth.roles == 1911) {
      setdocId(docChatId.chatId.participants[0])
    }
    else{
      setdocId( auth.id)
    }
  }, [])

  useEffect(() => {
    if(auth.roles == 1911) {
      setdocId(docChatId.chatId.participants[0])
    }
    else{
      setdocId( auth.id)
    }
    // Connect to the WebSocket server
    socketRef.current = io("http://localhost:8080");
    
    console.log(docChatId)
    
    // Join the specific chat session room
    socketRef.current.emit('joinSession', id,
      (response)=>{
        if (response.error) {
          console.error('Error joining session:', response.error);
    }
      else{
        setId(response);
      }
    
    });


    // Listen for incoming messages
    socketRef.current.on('receiveMessage', (message) => {
    setMessages((prevMessages) => [...prevMessages, { ...message}]);
    // setMessages([])
    });


    // Cleanup the socket connection on component unmount
    return () => {
      console.log(typeof sessionId)
      socketRef.current.emit('saveMessage', auth.id);
      socketRef.current.disconnect();
    };
  }, [docChatId,id]);


  // Get formatted current time
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      handleSendMessage();
    }
  };


  // Handle sending the message
  const handleSendMessage = () => {
    const senderId = auth.id
    if (userMessage.trim() !== '') {
      const messageData = {
        sessionId: sessionId,        
        senderId: senderId,          
        content: userMessage,  
        time: getCurrentTime(),
      };
      socketRef.current.emit('sendMessage', messageData);
      setMessages((prevMessages) => [...prevMessages, { ...messageData}]);
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
        {/* <span className="font-extrabold text-xl">You are talking with EXPERT</span> */}
        <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Leave Chat</Link>
      </div>


      <div className="relative pt-2 text-white px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div ref={chatBoxRef} className="bg-white rounded-lg shadow-lg p-6 h-96 overflow-y-auto mb-4">
            {messages.length === 0 ? (
              
              <p className="text-gray-500 text-center">No messages yet {id}</p>
              
            ) : (
              messages.map((message, index) => (
                <div key={index}
                        className={`mb-4 flex ${message.senderId === auth.id ? 'justify-end' : 'justify-start'}`}>


                  <div className={`${message.senderId === auth.id ? 'bg-customYellow text-black' : 'bg-customBlue text-white'} rounded-lg p-3 max-w-xs`} style={{ wordBreak: 'break-word' }}>
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
              onKeyDown={handleKeyDown}
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
