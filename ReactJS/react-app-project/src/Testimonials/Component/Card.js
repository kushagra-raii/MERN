import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Card = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute z-10 mx-auto top-[-7rem]'>
                <img className='aspect-square rounded-full z-30 w-[140px] h-140px' src={review.image} alt='' />
                <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute z-[-20] left-[10px] top-[-6px] '></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='uppercase text-violet-300 text-sm'>{review.job}</p>
            </div>

            
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-500'> 
                {review.text}
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>
            
        </div>
    )
}

export default Card