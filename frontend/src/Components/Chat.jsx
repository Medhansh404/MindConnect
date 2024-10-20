import React, {useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';

const Chat = () => {

    const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const chatBoxRef = useRef(null);  // Create a reference to the chat box container

  // Function to get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      // Add user message with timestamp
      setMessages([...messages, { sender: 'user', text: userMessage, time: getCurrentTime() }]);
      setUserMessage('');

      // Simulate a counselor reply after 1 second
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'counselor', text: 'Counselor reply message', time: getCurrentTime() }
        ]);
      }, 1000);
    }
  };

  // Automatically scroll to the bottom of the chat box whenever messages are updated
  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);
    return (
        <div>
        {/* Centered Text and Leave Chat Button */}
      <div className="flex justify-between items-center pt-20 px-8 max-w-4xl mx-auto">
      <span className="font-extrabold text-xl">You are talking with Dr. Counselor Jain</span>
      <Link to="/"
        className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500 hover:shadow-xl"
      >
        Leave Chat
      </Link>
    </div>

    {/* Chat Box */}
    <div className="relative pt-2 text-white px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Message Area */}
        <div ref={chatBoxRef} className="bg-white rounded-lg shadow-lg p-6 h-96 overflow-y-auto mb-4">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">No messages yet</p>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`${
                      message.sender === 'user'
                        ? 'bg-customYellow text-black'
                        : 'bg-customBlue text-white'
                    } rounded-lg p-3 max-w-xs`}
                    style={{ wordBreak: 'break-word' }}  // Break long words
                  >
                    <p>{message.text}</p>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="flex items-center">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message"
            className="w-full p-3 rounded-l-lg bg-white border border-gray-300 text-gray-800 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-customYellow text-black p-3 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
    );
}

export default Chat;

import React from 'react';

const Appointment = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Something on your mind?
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 font-bold mb-6">
            Chat with a peer worker who understands
          </h2>
          <p className="text-lg mb-4">
            Our peer workers have experience with mental health challenges and use this experience to support others.
          </p>
          <p className="text-lg font-semibold mb-4">
            We have <span className="text-white">11 sessions</span> available in the next <span className="text-white">3 days</span>
          </p>
          <a href="#" className="text-purple-300 underline mb-6 inline-block">
            See available times
          </a>
          <br />
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Book a free chat
          </button>
        </div>
        {/* Right side image placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/path/to/your/image.png" alt="Illustration" className="max-w-full h-auto"/>
        </div>
      </div>

      {/* Bottom features */}
      <div className="bg-gray-100 text-blue-900 py-8 mt-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <span className="bg-purple-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897C16.917 5.776 17 5.592 17 5.395c0-.197-.083-.38-.233-.486L9.601 1.03c-.15-.105-.352-.105-.502 0L2.236 4.91C2.085 5.015 2.003 5.198 2.003 5.395c0 .197.082.38.233.489zM2 14.695c0 .197.082.38.233.486l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897c.15-.105.233-.289.233-.486v-7.539l-7.165 3.897c-.15.082-.352.082-.502 0L2 7.156v7.539z" />
              </svg>
            </span>
            <p className="ml-4 text-lg">
              Free text-based support with a peer worker
            </p>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897C16.917 5.776 17 5.592 17 5.395c0-.197-.083-.38-.233-.486L9.601 1.03c-.15-.105-.352-.105-.502 0L2.236 4.91C2.085 5.015 2.003 5.198 2.003 5.395c0 .197.082.38.233.489zM2 14.695c0 .197.082.38.233.486l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897c.15-.105.233-.289.233-.486v-7.539l-7.165 3.897c-.15.082-.352.082-.502 0L2 7.156v7.539z" />
              </svg>
            </span>
            <p className="ml-4 text-lg">
              Chat in private about anything: nothing’s too big or small
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

