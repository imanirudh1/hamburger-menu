import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Forgot = ({
  handelSubmit,
  showForgotScreen,
  showRegister,
  forgot,
  showlogin,
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
          <input placeholder='Email' />

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
