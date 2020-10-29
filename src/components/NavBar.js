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
  const [account, setAccount] = useState({ name: '', email: '', password: '' })
  const [errors, setError] = useState({})
  const validate = () => {
    const err = {}
    if (account.email.trim() === '') {
      err.email = 'Email is Required'
    }
    if (account.password.trim() === '') {
      err.password = 'Password is Required'
    }
    if (account.name.trim() === '') {
      err.name = 'Name is Required'
    }
    return Object.keys(err).length === 0 ? null : err
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    const error = validate()
    setError(error || {})

    if (error) return
    console.log('submitted')
  }
  const handelChange = ({ currentTarget: input }) => {
    const accounts = { ...account }
    accounts[input.name] = input.value
    setAccount(accounts)
  }
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
          errors={errors}
          account={account}
          handelChange={handelChange}
          login={login}
          showlogin={showlogin}
          showRegister={showRegister}
          showForgotScreen={showForgotScreen}
          handelSubmit={handelSubmit}
        />

        <Register
          errors={errors}
          account={account}
          handelChange={handelChange}
          handelSubmit={handelSubmit}
          showRegister={showRegister}
          register={register}
          showlogin={showlogin}
        />

        <Forgot
          errors={errors}
          account={account}
          handelChange={handelChange}
          handelSubmit={handelSubmit}
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
