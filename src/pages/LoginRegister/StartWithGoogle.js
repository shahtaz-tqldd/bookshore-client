import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import google from '../../assets/icons/google.png'
import { AuthContext } from '../../context/AuthProvider'

const StartWithGoogle = () => {
    const { googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin =(e)=>{
        e.preventDefault()
        googleLogin()
            .then(result=>{
                console.log(result)
                navigate(from, {replace: true})
            })
            .catch(err=>console.error(err))
    }
    return (
        <div className="form-control mt-2">
            <button onClick={handleGoogleLogin} className="btn btn-accent btn-outline"><img src={google} alt="google" className='w-6' /> &nbsp;&nbsp;Continue With Google</button>
        </div>
    )
}

export default StartWithGoogle