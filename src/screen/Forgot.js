import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Forgot = ({
  handelSubmit,
  showForgotScreen,
  showRegister,
  forgot,
  showlogin,
  account,
  handelChange,
  errors,
}) => {
  return (
    <div className={forgot ? 'login active' : 'login'}>
      <Link to='#' className='menu-bars-login'>
        <AiIcons.AiOutlineClose onClick={showForgotScreen} />
      </Link>
      <form onSubmit={handelSubmit}>
        <div className='content'>
          <h1>Forgot Password?</h1>

          <label>Email</label>
          <input
            name='email'
            value={account['email']}
            onChange={handelChange}
            placeholder='Email'
          />
          {errors.email && <div className='error-input'>{errors.email}</div>}

          <button>Get Code</button>
          <p>
            Do not have an account? <span onClick={showRegister}>Register</span>
            <br></br>
            Remember Password? <span onClick={showlogin}>Login</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Forgot
