import React, { useContext } from 'react'
import registerImg from '../../assets/images/register.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StartWithGoogle from './StartWithGoogle'
import { AuthContext } from '../../context/AuthProvider'

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const handleCreateUser= data =>{
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then(result=>console.log(result))
            .then(err=>console.error(err))
    }
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="lg:w-1/2 text-center flex flex-col items-center lg:text-left">
                    <img src={registerImg} alt="login" className='w-2/3' />
                    <h1 className="text-3xl font-bold">Welcome to Bookshore</h1>
                </div>
                <div className="lg:w-1/2 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-xl font-bold">Open A New Account</h1>
                        <form onSubmit={handleSubmit(handleCreateUser)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {required: "Your Email is required"})} type="email" placeholder="username@email.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {required: "You must provide a password"})} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <span className='text-center'>or</span>
                        <StartWithGoogle />
                        <p className='mt-4'>Already have an Account? <Link to='/login' className='text-accent'>Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register