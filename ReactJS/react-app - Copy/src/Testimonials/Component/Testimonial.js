import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = (props) => {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex((index + reviews.length - 1) % reviews.length);
  };

  const rightShiftHandler = () => {
    setIndex((index + 1) % reviews.length);
  };

  const surpriseHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className='w-[85vw] max-w-[700px] rounded-md md:[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card review={reviews[index]} />

      <div className='flex text-3xl text-violet-400 font-bold gap-3 mt-7'>
        <button onClick={leftShiftHandler} className='cursor-pointer'>
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className='cursor-pointer'>
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg '
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
