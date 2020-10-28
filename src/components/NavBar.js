import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './NavBar.css'
const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [login, setlogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [forgot, setForgot] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const showlogin = () => {
    setlogin(!login)
    setForgot(false)
    setRegister(false)
  }
  const showRegister = () => {
    setRegister(!register)
    setlogin(false)
    setForgot(false)
  }
  const showForgotScreen = () => {
    setForgot(!forgot)
    setlogin(false)
    setRegister(false)
  }
  return (
    <div className='container'>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          <div className='nav-items-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Find Experts</li>
            <li className='nav-item'>Astrology</li>
            <li className='nav-item'>Health & Fitness</li>
            <li className='nav-item'>Law</li>
            <div className='user-sec'>
              <li onClick={showlogin} className='nav-item'>
                Login
              </li>
              <li onClick={showRegister} className='nav-item'>
                Signup
              </li>
              <li className='nav-item'>Become an Expert</li>
            </div>
          </div>
        </ul>
        <div className={login ? 'login active' : 'login'}>
          <Link to='#' className='menu-bars-login'>
            <AiIcons.AiOutlineClose onClick={showlogin} />
          </Link>
          <div className='content'>
            <h1>Welcome Back!</h1>
            <label>Email</label>
            <input />
            <label>Password</label>
            <input type='password' />
            <button>Login</button>
            <p>
              Do not have an account?{' '}
              <span onClick={showRegister}>Register</span>
              <br></br>
              Forgot Password?{' '}
              <span onClick={showForgotScreen}>Reset Password</span>
            </p>
          </div>
        </div>

        <div className={register ? 'login active' : 'login'}>
          <Link to='#' className='menu-bars-login'>
            <AiIcons.AiOutlineClose onClick={showRegister} />
          </Link>

          <div className='content'>
            <h1>Register</h1>
            <label>Name</label>
            <input type='email' placeholder='Name' />
            <label>Email</label>
            <input placeholder='Email' />
            <label>Password</label>
            <input type='password' placeholder='Password' />
            <button>Register</button>
            <p>
              Have an account? <span onClick={showlogin}>Login</span>
            </p>
          </div>
        </div>
        <div className={forgot ? 'login active' : 'login'}>
          <Link to='#' className='menu-bars-login'>
            <AiIcons.AiOutlineClose onClick={showForgotScreen} />
          </Link>

          <div className='content'>
            <h1>Forgot Password?</h1>

            <label>Email</label>
            <input placeholder='Email' />

            <button>Get Code</button>
            <p>
              Do not have an account?{' '}
              <span onClick={showRegister}>Register</span>
              <br></br>
              Remember Password? <span onClick={showlogin}>Login</span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
