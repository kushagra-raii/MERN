import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const SIgnupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");


  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password!==formData.confirmPassword) {
      toast.error("Password do not match")
    }
    setIsLoggedIn(true);
    console.log("Acc created")
    toast.success("Account Created")
    navigate("/dashboard")
  }
  return (
    <div>
      <div className='flex bg-richBlack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button onClick={()=> setAccountType("student")} className={`${accountType === "student" 
            ?
              "bg-richBlack-900 text-richBlack-5"
            :"bg-transparent text-richBlack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
        <button className={`${accountType === "instructor" 
            ?
              "bg-richBlack-900 text-richBlack-5"
            :"bg-transparent text-richBlack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>Instructor</button>
      </div>

      <form className=' flex flex-col gap-2' onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>
          <label className=' w-full'>
            <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='First Name'
              value={formData.firstName}
              className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
            />
          </label>
          <label className=' w-full'>
            <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Last Name'
              value={formData.lastName}
              className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
            />
          </label>
        </div>
        <label className=' w-full'>
          <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
          <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email address'
            name='email'
            className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
          />
        </label>
        <div className='w-full flex gap-x-4 mt-[20px]'>
          <label className=' w-full relative' >
            <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              name='password'
              autoComplete="new-password"
              className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
            />
            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => {
              setShowPassword((prev) => !prev)
            }}>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>
          <label className=' w-full relative'>
            <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder='confirm Password'
              name='confirmPassword'
              autoComplete="confirm-password"
              className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
            />
            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => {
              setShowConfirmPassword((prev) => !prev)
            }}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>
        </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          create Account
        </button>
      </form>
    </div>
  )
}

export default SIgnupForm