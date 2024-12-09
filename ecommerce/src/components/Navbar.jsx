import React from 'react';
import { IoStorefront, IoCartSharp, IoPerson, IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
const Navbar = () => {
    return <>
        <nav className='navbar'>
            <h1> SNEAKERS </h1>
            <ul>
                <li>
                    <Link to='/'>
                        <IoStorefront size={30} />
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        <IoLogIn size={30} />
                    </Link>
                </li>
                <li>
                    <IoLogOut size={30} />
                </li>
                <li>
                    <Link to='/account'>
                        <IoPerson size={30} />
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <IoCartSharp size={30} />
                    </Link>

                </li>
            </ul>
        </nav>
        <>
            <Outlet />
        </>
    </>
}

export default Navbar;

