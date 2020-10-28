import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './NavBar.css'
const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
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
              <li className='nav-item'>Login</li>
              <li className='nav-item'>Signup</li>
              <li className='nav-item'>Become an Expert</li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
