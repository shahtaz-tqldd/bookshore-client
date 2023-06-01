import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState("")
    useEffect(() => {
        fetch(`https://bookshore-server-shahtaz-tqldd.vercel.appjwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])
    return [token]
}

export default useToken;