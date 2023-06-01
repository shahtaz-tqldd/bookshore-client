import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import google from '../../assets/icons/google.png'
import { AuthContext } from '../../context/AuthProvider'

const StartWithGoogle = () => {
    const { googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleLogin()
            .then(result => {
                const userInfo = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    userType: 'Buyer'
                }
                addUserToDB(userInfo)

                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    const addUserToDB = (userInfo) => {
        fetch('https://bookshore-server-shahtaz-tqldd.vercel.appusers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("You are successfully Login")
                navigate('/')
            })
    }
    return (
        <div className="form-control mt-2">
            <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline normal-case"><img src={google} alt="google" className='w-6' /> &nbsp;&nbsp;Continue With Google</button>
        </div>
    )
}

export default StartWithGoogle