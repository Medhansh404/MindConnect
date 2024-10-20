import React from 'react';
import BlogCard from './BlogCard';
import Navbar from '../Navbar/Navbar';
import imgg1 from "../../assests/blog1.jpeg";
import imgg2 from "../../assests/blog2.jpeg";
import imgg3 from "../../assests/blog3.jpg";

function Blogs() {
  const blogs = [
    {
      image: imgg1,
      title: 'Power of Extracurriculars',
      description: 'College life is often painted as an exciting journey filled with new...',
      link: '/',
    },
    {
      image: imgg2,
      title: 'Boosting Academic Success and Mental Health',
      description: 'College life can be overwhelming with academic demands, social...',
      link: '/',
    },
    {
      image: imgg3,
      title: 'Friends: Your Lifeline in College Stress',
      description: 'College is often described as the best time of your life...',
      link: '/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative p-16 bg-customYellow">
        <Navbar />
      </div>
    <div className="mx-auto px-24 py-12 bg-gray-100 h-full pt-20">
      <div className="flex justify-between items-center mb-8 pb-9">
        <h1 className="text-6xl font-bold text-purple-600">Latest Blogs</h1>
        <a href="/" className="text-purple-600 text-xl font-bold border border-purple-600 px-11 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-auto rounded-3xl">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Blogs;
