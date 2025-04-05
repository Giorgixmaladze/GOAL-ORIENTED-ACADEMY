import { useState } from "react"

const useForm = () => {
    const handleSubmit = (e,callback) =>{
        e.preventDefault()
        const data = new FormData(e.target)
        const info = Object.fromEntries(data.entries())
        callback(info)
    }
    return handleSubmit
}

export default useForm