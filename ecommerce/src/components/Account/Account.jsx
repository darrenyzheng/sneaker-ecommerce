import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';
const DEFAULT_PICTURE = './Default_Profile_Pic.jpg';

const Account = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [img, setImg] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/account', {
            method: 'GET',
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    navigate('/unauthorized');
                    return;
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setImg(data.user.picture);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
            });
    }, []);
    return (
        <>
            <div className='account'>
                <div className="headers">
                    <h2>
                        Account
                    </h2>
                    <Link to='/account/transactions'>
                        Transactions </Link>
                </div>
                <div className="info">
                    <div>
                        <p> Email: {data?.user?.email} </p>
                        <p>  Name: {data?.user?.first_name} {data?.user?.last_name} </p>
                        <p>
                            OAuth Provider: {data?.user?.provider}
                        </p>

                    </div>

                    <img src={img}
                        alt="profile picture"
                        onError={() => setImg(DEFAULT_PICTURE)} />
                </div>


            </div>
        </>


    )
}

export default Account;