import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from "react-toastify";

const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt='' width={160} height={32} loading='lazy' />
            </Link>
            <nav>
                <ul className='flex gap-6 text-richBlack-100 ' >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-4 items-center text-richBlack-100'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className=' bg-richBlack-700 py-2 px-3 rounded-lg border border-richBlack-700' >
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className=' bg-richBlack-700 py-2 px-3 rounded-lg border border-richBlack-700'>
                            Sign Up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button className=' bg-richBlack-700 py-2 px-3 rounded-lg border border-richBlack-700' onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out")

                        }
                        }>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className=' bg-richBlack-700 py-2 px-3 rounded-lg border border-richBlack-700'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default NavBar