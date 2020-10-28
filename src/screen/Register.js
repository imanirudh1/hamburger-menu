import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Register = ({ register, showRegister, showlogin }) => {
  return (
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
  )
}

export default Register
