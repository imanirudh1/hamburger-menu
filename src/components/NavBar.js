import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import Forgot from '../screen/Forgot'
import './NavBar.css'
import Register from '../screen/Register'
import Login from '../screen/Login'
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
        <Login
          login={login}
          showlogin={showlogin}
          showRegister={showRegister}
          showForgotScreen={showForgotScreen}
        />

        <Register
          showRegister={showRegister}
          register={register}
          showlogin={showlogin}
        />

        <Forgot
          showForgotScreen={showForgotScreen}
          forgot={forgot}
          showRegister={showRegister}
          showlogin={showlogin}
        />
      </nav>
    </div>
  )
}

export default NavBar
