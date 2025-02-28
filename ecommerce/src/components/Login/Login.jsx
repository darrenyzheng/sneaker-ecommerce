import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';
import { useRef } from 'react';


const Login = () => {
    const formRef = useRef(null);

    const handleLoginSuccess = async (credential) => {
        formRef.current.token.value = credential.credential;
        await formRef.current.submit();
    }


    return <div className='login'>

        <h4>
            Sign In using Google OAuth
        </h4>
        <form
            action='http://localhost:5000/api/auth/google'
            method='POST'
            ref={formRef}>

            <input type="hidden" name='token' />
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </form>

    </div>

}

export default Login;