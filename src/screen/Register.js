import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const Register = ({
  handelSubmit,
  register,
  showRegister,
  showlogin,
  account,
  handelChange,
}) => {
  return (
    <div className={register ? 'login active' : 'login'}>
      <Link to='#' className='menu-bars-login'>
        <AiIcons.AiOutlineClose onClick={showRegister} />
      </Link>

      <form onSubmit={handelSubmit}>
        <div className='content'>
          <h1>Register</h1>
          <label>Name</label>
          <input
            name='name'
            value={account['name']}
            onChange={handelChange}
            type='text'
            placeholder='Name'
          />
          <label>Email</label>
          <input
            name='email'
            value={account['email']}
            onChange={handelChange}
            placeholder='Email'
          />
          <label>Password</label>
          <input
            name='password'
            onChange={handelChange}
            value={account['password']}
            type='password'
            placeholder='Password'
          />
          <button>Register</button>
          <p>
            Have an account? <span onClick={showlogin}>Login</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
