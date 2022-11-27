import { useEffect, useState } from "react"

const useVerifiedUser = (email) => {
    const [verifiedUser, setVerifiedUser] = useState(null)
    const [verifiedUserLoading, setVerifiedUserLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/verified/${email}`)
                .then(res => res.json())
                .then(data => {
                    setVerifiedUser(data.verifiedUser)
                    setVerifiedUserLoading(false)
                })
        }
    }, [email])
    return [verifiedUser, verifiedUserLoading]
}

export default useVerifiedUser;