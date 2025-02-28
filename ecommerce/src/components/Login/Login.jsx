import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';
import { useRef } from 'react';

// Dynamically set the API URL based on environment
const apiUrl = import.meta.env.MODE === 'development'
  ? 'http://localhost:5000/api/auth/google' // Local URL during development
  : '/api/auth/google'; // Relative API route in production (Vercel)

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
            action={apiUrl}
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