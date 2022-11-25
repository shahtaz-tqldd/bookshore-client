import React, { createContext } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider