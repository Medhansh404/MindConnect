import React from 'react';
import BlogCard from './BlogCard';

function Blogs() {
  const blogs = [
    {
      image: 'https://link-to-image1.png',
      title: 'Exploring social media’s impact',
      description: 'Mental health organisations collaborate to call for changes...',
      link: '/blog1',
    },
    {
      image: 'https://link-to-image2.png',
      title: 'Innovate Program Launch',
      description: 'ReachOut Australia announces the launch of its new Innovate...',
      link: '/blog2',
    },
    {
      image: 'https://link-to-image3.png',
      title: 'Laps for Life – 2024: Impact statement',
      description: 'Laps for Life provides an annual statement of its impact...',
      link: '/blog3',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">Blogs</h1>
        <a href="/view-all" className="text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors duration-300">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
