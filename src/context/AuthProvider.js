import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const emailLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        googleLogin,
        emailLogin,
        createUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider