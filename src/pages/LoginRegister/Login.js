import login from '../../assets/images/login.webp'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StartWithGoogle from './StartWithGoogle'
import { AuthContext } from '../../context/AuthProvider'
import ErrorMessage from '../../tools/ErrorMessage'
import useToken from '../../hooks/useToken';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('Login')
  const [loginEmail, setLoginEmail] = useState(null)
  const { register, handleSubmit } = useForm()
  const { emailLogin } = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')

  const [token] = useToken(loginEmail)

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  if (token) {
    navigate(from, { replace: true })
  }

  const handleLogin = (data) => {
    const email = data.email
    const password = data.password
    emailLogin(email, password)
      .then(result => {
        setLoginError('')
        toast.success("You are successfully Login")
        setLoginEmail(result.user.email)

      })
      .catch(err => {
        console.error(err.message)
        if (err.message === 'Firebase: Error (auth/user-not-found).') {
          let message = 'This user is not registered'
          setLoginError(message)
        } else {
          setLoginError(err.message)
        }
      })
  }
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 text-center flex flex-col items-center lg:text-left">
          <img src={login} alt="login" className='w-2/3' />
          <h1 className="text-3xl font-bold uppercase text-accent">Here you are<br />Let's get started</h1>
        </div>
        <div className="lg:w-1/2 card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
          <div className="card-body">
            <h1 className="text-xl font-bold text-primary">Login with Email</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: "Email is required" })} type="email" name="email" placeholder="username@email.com" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: "Your Password is reuired" })} type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary text-white normal-case">Login</button>
              </div>
              {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
            </form>
            <span className='text-center'>or</span>
            <StartWithGoogle />
            <p className='mt-4'>New to BookShore? <Link to='/register' className='text-primary'>Open an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
