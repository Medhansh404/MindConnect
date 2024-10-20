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