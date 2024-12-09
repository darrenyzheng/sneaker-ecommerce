import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';
import { useRef } from 'react';


const Login = () => {
    const formRef = useRef(null);

    const handleLoginSuccess = (credential) => {

        // set the value of the token to the crendetial
        formRef.current.token.value = credential.credential;

        // submit the form
        formRef.current.submit();
    }

    return <div className='login'>
        <form
            // setting the action to go to this address on submit 
            action='http://localhost:5000/api/auth/google'
            // set the method to post 
            method='POST'
            ref={formRef}>

            <input type="hidden" name='token' />
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </form>
    </div>

}

export default Login;