import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify'
const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword,setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prev) => {
            return {
                ...prev, [event.target.name]: event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }
    return (
        <form className='flex flex-col w-full gap-y-4 mt-6' id='LoginForm' onSubmit={submitHandler}>
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
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                    className='bg-richBlack-800 rounded-[0.5rem] text-richBlack-5 w-full p-[12px]'
                
                />
                <span  className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                    {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                <Link to="#" className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    <p>Forget Password</p>
                </Link>
            </label>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richBlack-900 px-[12px] py-[8px] mt-6 mb-2'>
                Sign In 
            </button>
    

        </form>
    )
}

export default LoginForm