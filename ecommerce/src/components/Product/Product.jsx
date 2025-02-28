import React, { useState, useEffect } from 'react';
import { IoCartOutline, IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { IoArrowUndoCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = () => {

    const { id } = useParams();
    const [sneaker, setSneaker] = useState({});
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    // Dynamically set the API base URL
    const apiUrl = import.meta.env.MODE === 'development'
        ? 'http://localhost:5000/api' // Local API during development
        : '/api'; // Relative API route in production

    useEffect(() => {
        fetch(`${apiUrl}/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sneaker_id: id })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setSneaker(data);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
            });
    }, [id, apiUrl]); // Add apiUrl and id as dependencies

    const addToCart = () => {
        const product = {
            id: sneaker?.id,
            quantity: quantity,
            stock: sneaker?.stock,
        };

        fetch(`${apiUrl}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(product),
        })
            .then(response => {
                if (response.status === 409) {
                    toast.error('Out of stock');
                    return;
                } else if (response.status === 401) {
                    navigate('/unauthorized');
                    return;
                }
                return response.json(); 
            })
            .then(data => {
                if (!data) {
                    return;
                }

                const inCart = sneaker?.stock - data.inCart; 
                toast.success(`Product successfully added. ${inCart} left`);
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Server error');
            });
    };

    return (
        <div className='product'>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="light"
                />
            </div>
            <Link to='/'>
                <IoArrowUndoCircle className='backArrow' size={40} />
            </Link>
            <img src={sneaker?.image_path} alt={sneaker?.name} />

            <div className='productInfo'>
                <p className='brand'> {sneaker?.brand} </p>
                <h2> {sneaker?.name} </h2>
                <p> Stock: {sneaker?.stock} </p>
                <h4> Size: {sneaker?.size} </h4>
                <p> {sneaker?.description} </p>
                <p className='price'> <b> ${sneaker?.resell_price} </b> </p>
                <div className='controls'>
                    <div className='stock'>
                        <IoAddOutline size={20} className={quantity >= sneaker?.stock ? 'inactive' : ''} onClick={() => setQuantity(quantity + 1)} />
                        {quantity}
                        <RiSubtractFill size={20} className={quantity === 1 ? 'inactive' : ''} onClick={() => setQuantity(quantity - 1)} />
                    </div>

                    <button className='addToCartButton' onClick={addToCart}>
                        <IoCartOutline size={30} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
