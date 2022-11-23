import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Bookshore - ${title}`
    },[title])
}

export default useTitle;