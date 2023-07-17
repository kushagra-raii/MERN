import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const SIgnupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

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
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='First Name'
              value={formData.firstName}
            />
          </label>
          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Last Name'
              value={formData.lastName}
            />
          </label>
        </div>
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
        <div>
          <label >
            <p>Create Password <sup>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              name='password'
              autoComplete="new-password"
            />
            <span onClick={() => {
              setShowPassword((prev) => !prev)
            }}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
          <label >
            <p>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder='confirm Password'
              name='confirmPassword'
              autoComplete="confirm-password"
            />
            <span onClick={() => {
              setShowPassword((prev) => !prev)
            }}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
        </div>
        <button>
          create Account
        </button>
      </form>
    </div>
  )
}

export default SIgnupForm