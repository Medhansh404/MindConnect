import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
// import logo from "../assests/home_logo.png";
import logo from "../../assests/home_logo.png";
import Navbar from '../Navbar/Navbar';

function Blogs({ limit }) {
  const [blogs, setBlogs] = useState([]);

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
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8 md:px-12 lg:px-24 lg:py-12">
      <Navbar />
      <div className="mx-auto max-w-7xl h-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-auto rounded-3xl mt-36">
          {displayblogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

// // BlogsDummy.jsx
// import React, { useEffect, useState } from 'react';
// import BlogCard from './BlogCard';
// import { Link } from 'react-router-dom';
// import img1 from '../../assests/blog1.jpeg' 
// import img2 from '../../assests/blog2.jpeg' 
// import img3 from '../../assests/blog3.jpg' 

// function Blogs({ limit }) {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Dummy data to simulate API response
//     const dummyData = [
//       {
//         image: img1,
//         title: 'Understanding Mental Health for College Students',
//         description: 'An insightful article on managing mental health during college.',
//         link: '/blog/mental-health-college',
//       },
//       {
//         image: img2,
//         title: 'Stress Management Tips',
//         description: 'Tips on managing stress effectively as a college student.',
//         link: '/blog/stress-management',
//       },
//       {
//         image: img3,
//         title: 'Balancing Academics and Well-being',
//         description: 'A guide on maintaining balance between studies and personal well-being.',
//         link: '/blog/balancing-academics',
//       },
//       // Add more dummy blog entries as needed
//     ];

//     setBlogs(dummyData);
//   }, []);

//   const displayBlogs = blogs.slice(0, limit);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="mx-auto px-24 py-12 bg-gray-100 h-full">
//         <div className="flex justify-between items-center mb-8 pb-9">
//           <h1 className="text-6xl font-bold text-purple-600">Latest Blogs</h1>
//           <Link
//             to='/blogs'
//             className="text-purple-600 text-xl font-bold border border-purple-600 px-11 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
//           >
//             View All
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-auto rounded-3xl">
//           {displayBlogs.map((blog, index) => (
//             <BlogCard key={index} {...blog} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs;