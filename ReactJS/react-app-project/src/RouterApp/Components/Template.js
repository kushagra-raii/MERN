import React from 'react'
import SignupForm from '../Components/SIgnupForm'
import LoginForm from '../Components/LoginForm'
import frame from "../assets/frame.png"
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, description1, description2, image, formType, setIsLoggedIn }) => {
    return (
        <div className=' flex w-11/12 max-w-[1160px] py-12 gap-y-0  gap-x-12  mx-auto justify-between'>
            <div className='w-11/12 max-w-[450px]' >
                <h1 className=' text-richBlack-5 font-semibold text-[1.875rem] leading=[2.375rem]'>{title}</h1>
                <p className='text-[1.125rem] mt-4 leading-9 '>
                    <span className=' text-richBlack-100 '>{description1}</span>
                    <span className=' text-blue-100 italic'>{description2}</span>
                </p>

                {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
                <div className='flex w-full items-center my4 gap-x-2'>
                    <div className=' h-[1px] bg-richBlack-700 w-full'></div>
                    <p className=' text-richBlack-700 leading-9 font-medium'>OR</p>
                    <div className='h-[1px] bg-richBlack-700 w-full'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richBlack-100 border border-richBlack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                    <FcGoogle />
                    <p>SignUp with Google</p>
                </button>

            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frame} alt='' width={558} height={504} loading='lazy'></img>
                <img className='absolute -top-4 right-4' src={image} alt='' width={558} height={504} loading='lazy'></img>
            </div>
        </div>
    )
}

export default Template