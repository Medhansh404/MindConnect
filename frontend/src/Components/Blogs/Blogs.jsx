import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';

// const BLOG_API_URL = process.env.BLOG_URL;

function Blogs({limit}) {
  const [blogs, setBlogs] = useState([]);
  // console.log(BLOG_API_URL);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=mental%20health&apiKey=750b921991ce48e7b6755191e900d205');
        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Ensure you access the correct structure (like `articles` in some APIs)
        const formattedData = (data.articles || []).map(article => ({
          image: article.urlToImage || 'fallback-image-url.jpg',
          title: article.title,
          description: article.description,
          link: article.url,
        }));
        
        setBlogs(formattedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  const displayblogs = blogs.slice(0,limit);
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto px-24 py-12 bg-gray-100 h-full">
        <div className="flex justify-between items-center mb-8 pb-9">
          <h1 className="text-6xl font-bold text-purple-600">Latest Blogs</h1>
          <Link to = '/blogs' className="text-purple-600 text-xl font-bold border border-purple-600 px-11 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-auto rounded-3xl">
          {displayblogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
