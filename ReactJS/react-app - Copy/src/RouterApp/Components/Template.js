import React from 'react'
import SignupForm from '../Components/SIgnupForm'
import LoginForm from '../Components/LoginForm'
import frame from "../assets/frame.png"


const Template = ({title,description1,description2,image,formType,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{description1}</span>
                <span>{description2}</span>
                {formType==="signUp"?(<SignupForm/>):(<LoginForm/>)}
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    <p>SignUp with Google</p>
                </button>
            </p>
        </div>
        <div>
            <img src={frame} alt='' width={558} height={504} loading='lazy'></img>
            <img src={image} alt='' width={558} height={504} loading='lazy'></img>
        </div>
    </div>
  )
}

export default Template