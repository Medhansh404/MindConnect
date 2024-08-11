import React from 'react';

function BlogCard({ image, title, description, link }) {
  return (
    <div className='bg-white rounded-3xl pb-2'>
    <a href={link} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-96 object-cover p-2 rounded-3xl" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="pt-4 pb-1 text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-lg mb-4">
          {description}
        </p>
        <a href="/allblogs" className="text-purple-600 text-xl font-bold border border-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
          Read More
        </a>
      </div>
    </a>
    </div>
  );
}

export default BlogCard;
