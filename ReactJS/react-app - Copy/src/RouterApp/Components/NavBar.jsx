import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"

const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
 
  return (
    <div className='flex justify-evenly items-center mt-2'>
        <Link to="/">
            <img src={logo} alt='' width={160} height={32} loading='lazy' />
        </Link>
        <nav>
            <ul className='flex gap-3' >
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
        <div className='flex gap-3 '>
        <button>
            {   !isLoggedIn &&
                <Link to="/login">Log In</Link>
            }
        </button>
        <button>
            {   !isLoggedIn &&
                <Link to="/signup">Sign Up</Link>
            }
        </button>
        <button>
            {   isLoggedIn &&
                <Link to="/" >Log out</Link>
            }
        </button>
        <button>
            {   isLoggedIn &&
                <Link to="/dashboard">Dashboard</Link>
            }
        </button>
        </div>

    </div>
  )
}

export default NavBar