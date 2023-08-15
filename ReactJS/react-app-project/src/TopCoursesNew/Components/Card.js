import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function likeHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev)=>prev.filter((cid)=>cid !== course.id));
            toast.warning("like removed")
        }
        else{
            if (likedCourses.length===0) {
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev, course.id])
            } 
            toast.success("like added")
        }
    }
    return (
        <div className='w-[300px] bg-[#18181b] bg-opacity-80 rounded-sm overflow-hidden'>
            <div className='relative'>
                <img className='' src={course.image.url} alt='' />
                <div className='grid place-items-center w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-17px]'>
                    <button onClick={likeHandler}>
                        {
                            likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className='m-5'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substring(0,100)+"...") : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card