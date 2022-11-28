import React, { useContext, useState } from 'react'
import registerImg from '../../assets/images/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StartWithGoogle from './StartWithGoogle'
import { AuthContext } from '../../context/AuthProvider'
import './file.css'
import ErrorMessage from '../../tools/ErrorMessage'
import toast from 'react-hot-toast'
import useToken from '../../hooks/useToken'


const Register = () => {
    const [createdUserEmail, setCreatedUserEmail] = useState(null)
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate();
    const [token] = useToken(createdUserEmail)

    if(token){
        navigate("/")
    }

    const imageHostKey = process.env.REACT_APP_imgbb_key

    const handleCreateUser = data => {
        const email = data.email
        const password = data.password
        const name = data.name
        const userType = data.userType

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?&key=${imageHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const photoURL = imgData.data.url;
                    const userInfo = {
                        displayName: name,
                        userType,
                        photoURL
                    }
                    createUser(email, password)
                        .then(result => {
                            const user = result.user
                            console.log(user)
                            updateUser(userInfo)
                                .then(() => {
                                    const dbUserInfo = {...userInfo, email }
                                    addUserToDB(dbUserInfo)
                                })
                                .catch(err => console.error(err))
                        })
                        .then(err => console.error(err))
                }
            })

    }
    const addUserToDB=(dbUserInfo)=>{
        fetch('https://bookshore-server.vercel.app/users',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dbUserInfo)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success("User Registered successfully")
            setCreatedUserEmail(dbUserInfo.email)
            navigate('/')
        })
    } 
    return (
        <div className="hero mt-6 mb-16">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="lg:w-1/2 text-center flex flex-col items-center lg:text-left">
                    <img src={registerImg} alt="login" className='w-2/3' />
                    <h1 className="text-3xl font-bold pb-32">Hey! How are you doing?</h1>
                </div>
                <div className="lg:w-1/2 card flex-shrink-0 w-full max-w-md shadow-lg bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold">Open A New Account</h1>
                        <form onSubmit={handleSubmit(handleCreateUser)}>
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Full Name</span>
                                </label>
                                <input {...register("name", { required: "Your Name is required" })} name="name" type="text" placeholder="Ex: John Doe" className="input input-bordered" />
                                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input {...register("email", { required: "Your Email is required" })} name="email" type="email" placeholder="username@email.com" className="input input-bordered" />
                                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                            </div>
                            {/* select option  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">You want to open account as?</span>
                                </label>
                                <select {...register("userType", { required: "You must select an option" })} className="input input-bordered" >
                                    <option disabled>Please select an option</option>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.userType && <ErrorMessage>{errors.userType.message}</ErrorMessage>}
                            </div>
                            {/* image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Your Photo</span>
                                </label>
                                <input {...register("image", { required: "Your Photo is required" })} name="image" type="file" placeholder='your photo' />
                                {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: "You must provide a password" })} name="password" type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
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