import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars />
        </Link>
          </div>
           <nav className={sideBar ? 'nav-menu active'} ></nav>
    </>
  )
}

export default NavBar
