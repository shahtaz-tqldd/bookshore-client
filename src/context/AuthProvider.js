import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useQuery } from '@tanstack/react-query'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState('')

	const googleProvider = new GoogleAuthProvider()
	const googleLogin = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
	}

	const emailLogin = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const updateUser = (userInfo) => {
		return updateProfile(auth.currentUser, userInfo)
	}

	const logout = () => {
		setLoading(true)
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			setLoading(false)
		})
		return () => unsubscribe();
	}, [])

	// product categories fetched and provide
	const { data: categories = [] } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const res = await fetch("https://bookshore-server-shahtaz-tqldd.vercel.appcategories")
			const data = await res.json()
			return data
		}
	})

	// user fetched from db and provide

	
	const authInfo = {
		googleLogin,
		emailLogin,
		createUser,
		updateUser,
		loading,
		setLoading,
		user,
		setUser,
		logout,
		categories,
		category, 
		setCategory
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
