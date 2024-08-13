import React, { useState, useRef } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? "0px" : `${contentRef.current.scrollHeight}px`);
  };

  return (
    <div className="border-b border-gray-200 bg-blue-100 p-2 pl-4 pr-4 rounded-3xl overflow-hidden">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="text-2xl font-extrabold text-gray-800">{question}</span>
        <span className="text-2xl">
          {isOpen ? (
            <span className="font-bold text-3xl text-gray-800 border bg-white rounded-full pl-3 pr-3 pb-1">-</span>
          ) : (
            <span className="font-bold text-3xl text-gray-800 border bg-white rounded-full pl-2 pr-2 pb-1">+</span>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          height: height,
          transition: "height 0.3s ease-in-out",
        }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-600 prose p1 mx-xsx overflow-hidden laptop:mx-l transition-all transition-duration-200 ease-in-out animate-faq-in">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
