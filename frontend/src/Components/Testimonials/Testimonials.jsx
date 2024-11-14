import React, { useState } from 'react';
import './testimonials.css'; // Import the CSS file for transitions

const testimonials = [
  {
    text: "MindConnect has been a game-changer for me during college. The blog posts are incredibly insightful. It’s comforting to know there’s a supportive community and expert guidance just a click away.",
    author: "Devansh Jain - 4th Year College Student",
  },
  {
    text: "Navigating college stress can be overwhelming, but MindConnect has provided a lifeline. The resources and tips are practical and easy to follow, and the ability to connect with mental health experts anonymously has been invaluable.",
    author: "Yash Chugh - 3rd Year College Student",
  },
  {
    text: "I was hesitant about reaching out for mental health support, but MindConnect’s anonymous services made it easy to get the help I needed. The platform helped me manage stress more effectively.",
    author: "Medhansh Sharma - 1st Year College Student",
  },
  // Add more testimonials here if needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlide = (newIndex) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(newIndex);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duration of the slide transition
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    handleSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    handleSlide(newIndex);
  };

  return (
    <div className="max-w-72 md:max-w-4xl mx-auto text-center py-5 md:py-10 relative mt-20 md:mt-36 mb-20 md:mb-36">
      <h1 className="text-5xl font-bold mb-8">Hear From Our Happy healers</h1>
      <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 -translate-x-9 text-2xl text-gray-800 button "
        >
          &larr;
        </button>
      <div className="relative overflow-hidden h-80 md:h-48">
      
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${
              index === currentIndex - 1 || (currentIndex === 0 && index === testimonials.length - 1)
                ? 'prev'
                : ''
            } ${
              index === currentIndex + 1 || (currentIndex === testimonials.length - 1 && index === 0)
                ? 'next'
                : ''
            } bg-blue-100 p-6 rounded-3xl`}
          >
            <p className="text-lg text-gray-800">
              <span className="text-blue-600 text-xl">“</span> {testimonial.text}{" "}
              <span className="text-blue-600 text-xl">”</span>
            </p>
            <p className="mt-4 font-bold">{testimonial.author}</p>
          </div>
        ))}
      </div>
      <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-12 text-2xl text-gray-800 button "
        >
          &rarr;
        </button>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 bg-gray-800 rounded-full ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
