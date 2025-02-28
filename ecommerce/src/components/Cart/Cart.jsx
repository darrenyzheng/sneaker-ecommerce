import React, { useState, useEffect, useCallback, useRef } from "react";
import { RiSubtractFill } from "react-icons/ri";
import { IoAddOutline, IoTrashSharp } from "react-icons/io5";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout} from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
    const [cartData, setCartData] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const fetchClientSecret = useCallback(() => {
        return fetch('http://localhost:5000/api/checkout/create-checkout-session', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',

        }).then((res) =>
            res.json())
            .then((data) => data.clientSecret)
    }, []);

    const options = { fetchClientSecret };

    useEffect(() => {
        if (showCheckout) {
            modalRef.current.showModal();
        }
        else {
            modalRef.current.close();
        }
    }, [showCheckout]);

    const fetchCart = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                navigate('/unauthorized');
                return;
            }
            const data = await response.json();
            setCartData(data);
            const totalPrice = data.reduce((acc, sneaker) => {
                return acc + sneaker.resell_price * sneaker.quantity;
            }, 0);
            setTotalPrice(Math.round(totalPrice).toFixed(2));
        } catch (err) {
            console.error('Error fetching cart data:', err);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addQuantity = async (sneaker) => {
        const product = {
            id: sneaker.id,
            quantity: 1,
            stock: sneaker.stock,
        };

        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                navigate('/unauthorized');
                return;
            }
            await fetchCart();
            toast.success('Cart successfully updated');

        } catch (error) {
            console.error('Error updating quantity:', error);
            toast.error('Server error');
        }
    };

    const subtractQuantity = async (sneaker) => {
        if (sneaker.quantity === 1) 
            return; 

        const product = {
            id: sneaker.id,
            quantity: - 1,
            stock: sneaker.stock,
        };

        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                navigate('/unauthorized');
                return;
            }

            await fetchCart();
            toast.success('Cart successfully updated');
        } catch (error) {
            console.error('Error updating quantity:', error);
            toast.error('Server error');
        }
    };

    const deleteSneaker = async (sneaker) => {
        const product = {
            id: sneaker.id
        };

        try {
            const response = await fetch('http://localhost:5000/api/cart/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(product),
            });

            if (!response.ok) {

                return;
            }
            await fetchCart();
            toast.success('Sneaker successfully deleted');
        } catch (error) {
            console.error('Error deleting sneaker:', error);
            toast.error('Server error');
        }
    };

    const checkOut = async () => {
        setShowCheckout(true);
    }

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setShowCheckout(false);
            }
        };

        if (showCheckout) {
            document.addEventListener("keydown", handleEscKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [showCheckout]);

    return (
        <div className="cart">
            <dialog ref={modalRef}>
                {
                    showCheckout && <div className="checkout">
                        <EmbeddedCheckoutProvider
                            stripe={stripePromise}
                            options={options}>
                            <EmbeddedCheckout />
                        </EmbeddedCheckoutProvider>
                    </div>
                }
            </dialog>

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
            
            <h1>
                Your Cart ({cartData.length} {(cartData).length === 1 ? 'item' : 'items'})
            </h1>

            <div className='cartHeaders'>
                <h4>
                    Name
                </h4>

                <h4>
                    Price
                </h4>
                <h4>
                    Quantity
                </h4>

                <h4>
                    Stock
                </h4>
                <h4>
                    Total
                </h4>
            </div>

            <div className='cartContents'>

                {Object.values(cartData)?.map((sneaker) => (
                    <div key={sneaker.id} className="sneakerContainer" >
                        <div className="description">

                            <h4>
                                <img src={sneaker.image_path} />
                                {sneaker.name}</h4>
                        </div>
                        <p> ${sneaker.resell_price} </p>
                        <div className="cartQuantity">
                            <div className={`quantityChanger ${sneaker.quantity >= sneaker.stock ? 'inactive' : ''}`}
                                onClick={() => { addQuantity(sneaker) }}>
                                <IoAddOutline size={20} />
                            </div>
                            <div className="quantityNumber">
                                {sneaker.quantity}
                            </div>
                            <div className={`quantityChanger ${sneaker.quantity === 1 ? 'inactive' : ''}`}
                                onClick={() => { subtractQuantity(sneaker) }}>
                                <RiSubtractFill size={20} />
                            </div>
                        </div>
                        <p>
                            {sneaker.stock}
                        </p>
                        <p>
                            ${sneaker.resell_price * sneaker.quantity}
                            <IoTrashSharp size={20} onClick={() => { deleteSneaker(sneaker) }} />
                        </p>

                    </div>
                ))}

            </div>

            {cartData?.length > 0 && <div className="cartSummary">
                <div>
                    <p>
                        <b> Subtotal: </b>${totalPrice}
                    </p>
                </div>


                <div>
                    <p>
                        <b>  Sales Tax (10%): </b>   ${(Math.round(totalPrice * 0.10 * 100) / 100).toFixed(2)}
                    </p>
                </div>

                <div>
                    <p>
                        <b>  Grand Total:</b>  ${(Number(totalPrice) + (Number(totalPrice) * 0.10)).toFixed(2)}
                    </p>
                </div>

                <button onClick={() => { checkOut() }}>
                    Check out
                </button>
            </div>}

        </div >
    )
}

export default Cart;