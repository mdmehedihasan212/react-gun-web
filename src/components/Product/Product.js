import React from 'react';
import './Product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Product = ({ product, addToCart }) => {
    // console.log(product);
    const { name, img, price, action } = product;

    return (
        <div className="product-container">
            <img src={img} alt="gun_photo" />
            <div className="product-info">
                <p className="product-name">Name: {name}</p>
                <p>Action: {action}</p>
                <p>Price: {price}</p>
            </div>
            <div>
                <button onClick={() => addToCart(product)} className="cart-btn">
                    <p>Add to Cart</p>
                    <AiOutlineShoppingCart className='icon' />
                </button>
            </div>
        </div >
    );
};

export default Product;