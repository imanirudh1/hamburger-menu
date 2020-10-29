import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Login = ({
  handelSubmit,
  login,
  showlogin,
  showRegister,
  showForgotScreen,
  account,
  handelChange,
  errors,
}) => {
  return (
    <div className={login ? 'login active' : 'login'}>
      <Link to='#' className='menu-bars-login'>
        <AiIcons.AiOutlineClose onClick={showlogin} />
      </Link>
      <form onSubmit={handelSubmit}>
        <div className='content'>
          <h1>Welcome Back!</h1>
          <label>Email</label>
          <input
            name='email'
            value={account['email']}
            onChange={handelChange}
          />
          {errors.email && <div className='error-input'>{errors.email}</div>}
          <label>Password</label>
          <input
            name='password'
            onChange={handelChange}
            value={account['password']}
            type='password'
          />
          {errors.password && (
            <div className='error-input'>{errors.password}</div>
          )}
          <button>Login</button>
          <p>
            Do not have an account? <span onClick={showRegister}>Register</span>
            <br></br>
            Forgot Password?{' '}
            <span onClick={showForgotScreen}>Reset Password</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
