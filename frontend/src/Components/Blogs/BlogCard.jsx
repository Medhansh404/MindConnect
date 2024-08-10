import React from 'react';

function BlogCard({ image, title, description, link }) {
  return (
    <a href={link} className="block max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </a>
  );
}

export default BlogCard;
