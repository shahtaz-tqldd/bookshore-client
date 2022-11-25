import React from 'react'
import login from '../../assets/images/login.png'
import { Link } from 'react-router-dom'
import StartWithGoogle from './StartWithGoogle'

const Login = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 text-center flex flex-col items-center lg:text-left">
          <img src={login} alt="login" className='w-2/3'/>
          <h1 className="text-3xl font-bold">Welcome to Bookshore</h1>
        </div>
        <div className="lg:w-1/2 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-xl font-bold">Login with Email</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary text-white">Login</button>
            </div>
            <span className='text-center'>or</span>
            <StartWithGoogle />
            <p className='mt-4'>New to BookShore? <Link to='/register' className='text-accent'>Open Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login