import React from 'react'
import SignupForm from '../Components/SIgnupForm'
import LoginForm from '../Components/LoginForm'
import frame from "../assets/frame.png"


const Template = ({ title, description1, description2, image, formType, setIsLoggedIn }) => {
    return (
        <div className=' flex w-11/12 max-w-[1160px] py-12 gap-y-0  gap-x-12  mx-auto '>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{description1}</span>
                    <span>{description2}</span>
                </p>

                {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    <p>SignUp with Google</p>
                </button>

            </div>
            <div>
                <img src={frame} alt='' width={558} height={504} loading='lazy'></img>
                <img src={image} alt='' width={558} height={504} loading='lazy'></img>
            </div>
        </div>
    )
}

export default Template