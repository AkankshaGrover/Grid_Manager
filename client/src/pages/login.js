import {signInWithGoogle, auth} from '../firebase'
import { useNavigate } from "react-router-dom";

import React from 'react'
function Login(){
    const navigate = useNavigate()
    React.useEffect(() => {
        console.log(auth.currentUser)
    }, [])
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center'>
            <button className="btn btn-primary text-2xl" onClick={async () => {await signInWithGoogle(); if(auth.currentUser) navigate("/layout", { replace: true });}}>Login</button>
        </div>
    )
}

export default Login