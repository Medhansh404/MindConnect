import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and App Links */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-4">brightline</h1>
          <div className="flex space-x-4">
            <a href="#" className="block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="w-36"/>
            </a>
            <a href="#" className="block">
              <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" className="w-36"/>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-12">
          <div>
            <h2 className="text-lg font-bold mb-4">About us</h2>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">Our Approach</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">For Families</h2>
            <ul>
              <li><a href="#" className="hover:underline">Our Care</a></li>
              <li><a href="#" className="hover:underline">Care Team</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">For Business</h2>
            <ul>
              <li><a href="#" className="hover:underline">For Employers</a></li>
              <li><a href="#" className="hover:underline">For Health Plans</a></li>
              <li><a href="#" className="hover:underline">For Consultants</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-bold mb-4">Join our newsletter</h2>
          <p>Sign up for updates, resources, and content!</p>
          <form className="mt-4">
            <input type="email" placeholder="Your email" className="bg-gray-200 text-black px-4 py-2 rounded-l-md"/>
            <button type="submit" className="bg-gold text-black px-4 py-2 rounded-r-md">→</button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p>(888) 224-7332</p>
          <p><a href="mailto:info@hellobrightline.com" className="hover:underline">info@hellobrightline.com</a></p>
          <p className="mt-4">BrightLife Kids is here to support California families with kids ages 0–12.</p>
          <p>Learn more about how to offer this no-cost program by emailing <a href="mailto:ce@hellobrightline.com" className="hover:underline">ce@hellobrightline.com</a> today.</p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="block">
              <img src="/path-to-facebook-icon.png" alt="Facebook" className="w-6 h-6"/>
            </a>
            <a href="#" className="block">
              <img src="/path-to-instagram-icon.png" alt="Instagram" className="w-6 h-6"/>
            </a>
            <a href="#" className="block">
              <img src="/path-to-linkedin-icon.png" alt="LinkedIn" className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
