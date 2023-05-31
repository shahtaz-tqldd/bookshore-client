import { useEffect, useState } from "react"

const useVerifiedUser = (email) => {
    const [verifiedUser, setVerifiedUser] = useState(null)
    const [verifiedUserLoading, setVerifiedUserLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://bookshore-server-shahtaz-tqldd.vercel.app/users/verified/${email}`)
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