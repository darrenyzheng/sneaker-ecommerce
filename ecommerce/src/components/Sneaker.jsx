import React from "react";
import { Link } from "react-router-dom";

const Sneaker = ({ id, name, size, brand, resellPrice, image, releaseDate }) => {
    return (

        <div className='sneaker'>
            <Link to={`/product/${id}`}>
                <img src={image} />
                <div>
                    <h4> {brand}  </h4>
                    <p> {name}  </p>
                    <p> ${resellPrice} </p>
                    <p> Release: {releaseDate} </p>
                    <p> {size}</p>

                </div>
            </Link>

        </div>
    )
}

export default Sneaker;
