import React from 'react'
import { FcLike } from 'react-icons/fc';

const Card = (props) => {
    let course = props.course;
    return (
        <div className='w-[300px] bg-[#18181b] bg-opacity-80 rounded-sm overflow-hidden'>
            <div className='relative'>
                <img className='' src={course.image.url} alt='' />
                <div className='grid place-items-center w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3'>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>

            <div className='m-5'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}

export default Card