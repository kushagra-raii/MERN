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
        <form id='LoginForm' onSubmit={submitHandler}>
            <label >
                <p>Email Address <sup>*</sup></p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email address'
                    name='email'
                />
            </label>
            <label >
                <p>Password <sup>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                />
                <span onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                    {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                <Link to="#" >
                    <p>Forget Password</p>
                </Link>
            </label>
            <button>
                Sign In 
            </button>

        </form>
    )
}

export default LoginForm