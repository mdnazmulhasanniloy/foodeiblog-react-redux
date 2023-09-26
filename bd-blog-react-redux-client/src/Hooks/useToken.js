import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.success) {
                        localStorage.setItem('accessToken', data?.accessToken)
                        setToken(data?.accessToken)
                    }
                    else{
                        console.log(data?.error)
                    }
                })
                .catch(err => toast.error(err?.message))
        }
    }, [email])
    return (token);
}

export default useToken;