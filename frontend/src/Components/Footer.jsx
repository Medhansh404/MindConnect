import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo_foot.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-9">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and App Links */}
        <div className="flex flex-col items-start">
          <Link aria-label="Go to homepage" to="/">
            <img src={logo} alt="resume" 
            className="relative -top-5 h-15 w-48 pb-4" 
            style={{ color: 'transparent' }} 
              loading="lazy"
            />
          </Link>
        </div>

        <div>
          <ul className='text-lg font-bold flex flex-row space-x-4'>
            <li><Link to ="chat" className="hover:underline">Chat With Expert</Link></li>
            <li><Link to ="/blogs" className="hover:underline">Blogs</Link></li>
            <li><Link to ="/faq" className="hover:underline">FAQs</Link></li>
            <li><Link to ="/about" className="hover:underline">About Us</Link></li>
            <li><Link to ="/diary" className="hover:underline">Scribble</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-bold mb-4">Join Us</h2>
          <p>Sign up for updates, resources, and content!</p>
          <form className="mt-4">
            <input type="email" placeholder="Your email" className="bg-gray-200 text-black px-4 py-2 rounded-md"/>
            <button type="submit" className="bg-gold text-black px-4 py-2 rounded-r-md">→</button>
          </form>
        </div>

        {/* Contact Information */}
        {/* <div className='flex gap-x-px'> */}
        <div className='relative -top-11'>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p>123-123-123</p>
          <p><a href="mailto:info@hellobrightline.com" className="hover:underline">abc@gmail.com</a></p>
          <p className="mt-4">MindConnect is here to support college students.</p>
          {/* <p>Learn more about how to offer this no-cost program by emailing <a href="mailto:ce@hellobrightline.com" className="hover:underline">ce@hellobrightline.com</a> today.</p> */}
        </div>
          {/* Social Media Links */}
          <div className="mt-16 pr-11">
            <span>© MindConnect. All Rights Reserved. 2024</span>
          </div>
          </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
