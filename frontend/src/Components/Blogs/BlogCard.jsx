import React from 'react';
import {Link} from 'react-router-dom'

function BlogCard({ image, title, description, link }) {
  return (
    <div className='bg-white rounded-3xl pb-2 hover:scale-100 transform transition-transform duration-300'  loading="lazy">
    <a href={link} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-80 object-cover p-2 rounded-3xl" src={image} alt={title} loading="lazy"/>
      <div className="px-6 py-4">
        <h3 className="pt-4 pb-1 text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-lg mb-4">
          {description}
        </p>
        <Link to = {link} className="text-purple-600 text-xl font-bold border border-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
          Read More
        </Link>
      </div>
    </a>
    </div>
  );
}

export default BlogCard;
