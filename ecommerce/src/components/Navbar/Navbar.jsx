import React, { useState, useEffect } from 'react';
import { IoStorefront, IoCartSharp, IoPerson, IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/account/status', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(data.isAuthenticated);
                }
            } catch (error) {
                console.error("Error checking login status:", error);
            }
        };

        checkLoginStatus();
    }, []);

    const logout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/account/logout', {
                method: 'POST',
                credentials: 'include'
            });

            if (response.ok) {
                setIsLoggedIn(false);
                window.location.href = '/login';
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <h1>SNEAKERS</h1>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to='/'>
                            <IoStorefront size={30} aria-label="Home" />
                        </Link>
                    </li>

                    {!isLoggedIn ? (
                        <li className={location.pathname === '/login' ? 'active' : ''}>
                            <Link to='/login'>
                                <IoLogIn size={30} aria-label="Login" />
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <IoLogOut size={30} aria-label="Logout" onClick={logout} />
                            </li>
                            <li className={location.pathname === '/account' ? 'active' : ''}>
                                <Link to='/account'>
                                    <IoPerson size={30} aria-label="Account" />
                                </Link>
                            </li>
                            <li className={location.pathname === '/cart' ? 'active' : ''}>
                                <Link to='/cart'>
                                    <IoCartSharp size={30} aria-label="Cart" />
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;