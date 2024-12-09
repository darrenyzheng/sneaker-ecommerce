import React from 'react';
import { useState } from 'react';
import { IoCartOutline, IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import sneakerData from '../sneakers';
import { IoArrowUndoCircle } from "react-icons/io5";

const Product = () => {

    const { id } = useParams();
    const { name, brand, description, size, resellPrice, image, stock } = sneakerData.find(sneaker => sneaker.id == id);
    const [sneakerStock, setStock] = useState(stock);
    return (
        <div className='product'>
            <IoArrowUndoCircle className='backArrow' size={40} />
            <img src={image} alt={name} />

            <div className='productInfo'>
                <p className='brand'> {brand} </p>
                <h2> {name} </h2>
                <p> {description} </p>
                <p className='price'> <b> ${resellPrice} </b> </p>
                <div className='controls'>
                    <div className='stock'>
                        <IoAddOutline size={20} />
                        {sneakerStock}
                        <RiSubtractFill size={20} />
                    </div>

                    <button className='addToCartButton'>
                        <IoCartOutline size={30} />
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Product;