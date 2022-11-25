import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }
    
    const logout = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
        })
        return()=>unsubscribe();
    },[])

    const authInfo = {
        googleLogin,
        emailLogin,
        createUser,
        updateUser,
        loading,
        setLoading, 
        user,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider