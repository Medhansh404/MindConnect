import React, { useState } from 'react';
import './testimonials.css'; // Import the CSS file for transitions

const testimonials = [
  {
    text: "In just a few weeks, my son has learned some important and useful skills to manage his anxiety. His therapist is supportive, engaging, and paces the therapy in a way that helps my son feel successful.",
    author: "Brightline member",
  },
  {
    text: "My name is Devansh Jain, I was very depressed but this helped me a lot.",
    author: "Brightline member",
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
    <div className="max-w-4xl mx-auto text-center py-10 relative mt-36 mb-36">
      <h1 className="text-5xl font-bold mb-8">Hear from our parents & caregivers</h1>
      <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 -translate-x-9 text-2xl text-gray-800 button "
        >
          &larr;
        </button>
      <div className="relative overflow-hidden h-48">
      
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
            } bg-blue-100 p-6 rounded-full`}
          >
            <p className="text-lg text-gray-800">
              <span className="text-blue-600 text-xl">“</span> {testimonial.text}{" "}
              <span className="text-blue-600 text-xl">”</span>
            </p>
            <p className="mt-4 font-semibold">{testimonial.author}</p>
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
