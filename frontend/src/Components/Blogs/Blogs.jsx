import React from 'react';
import BlogCard from './BlogCard';
import imgg from "../../assests/blog.jpg";

function Blogs() {
  const blogs = [
    {
      image: imgg,
      title: 'Exploring social media’s impact',
      description: 'Mental health organisations collaborate to call for changes...',
      link: '/blog1',
    },
    {
      image: imgg,
      title: 'Innovate Program Launch',
      description: 'ReachOut Australia announces the launch of its new Innovate...',
      link: '/blog2',
    },
    {
      image: imgg,
      title: 'Laps for Life – 2024: Impact statement',
      description: 'Laps for Life provides an annual statement of its impact...',
      link: '/blog3',
    },
  ];

  return (
    <div className="mx-auto px-24 py-12 bg-gray-100 h-screen">
      <div className="flex justify-between items-center mb-8 pb-9">
        <h1 className="text-6xl font-bold text-purple-600">Blogs</h1>
        <a href="/view-all" className="text-purple-600 text-xl font-bold border border-purple-600 px-11 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-auto rounded-3xl">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
