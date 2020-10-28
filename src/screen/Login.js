import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Login = ({ login, showlogin, showRegister, showForgotScreen }) => {
  return (
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
          Do not have an account? <span onClick={showRegister}>Register</span>
          <br></br>
          Forgot Password?{' '}
          <span onClick={showForgotScreen}>Reset Password</span>
        </p>
      </div>
    </div>
  )
}

export default Login
