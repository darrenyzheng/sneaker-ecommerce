import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="779335801954-jpf7e3m97111ij0cgc3tc0bbme0n2gek.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)
