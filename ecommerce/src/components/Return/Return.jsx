import { useState, useEffect } from 'react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Return.css';
const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');

        fetch(`http://localhost:5000/api/checkout/session-status?session_id=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                setStatus(data.status);
                setCustomerEmail(data.customer_email);
                if (data.status === 'complete') {
                    fetch('http://localhost:5000/api/cart/checkout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    })
                        .then((res) => {
                            if (res.ok) {
                                console.log('Stock updated and cart cleared');
                            }
                        })
                        .catch((error) => {
                            console.error('Error updating stock and clearing cart:', error);
                        });
                }
            })
            .catch((err) => {
                console.error('Error fetching session status:', err);
            });
    }, []);


    if (status === 'open') {
        return (
            <Navigate to="/" />
        )
    }

    if (status === 'complete') {
        return (
            <section className="success">
                <p>
                    We appreciate your business! A confirmation email will be sent to {customerEmail}.

                    If you have any questions, please email <a href="mailto:darrenzheng1997@gmail.com"> darrenzheng1997@gmail.com</a>.
                </p>
            </section>
        )
    }

    return null;
}

export default Return;
