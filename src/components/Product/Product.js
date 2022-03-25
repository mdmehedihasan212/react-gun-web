import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    // console.log(product);
    const { name, img, price, action } = product;
    return (
        <div className="product-container">
            <img src={img} alt="gun_photo" />
        </div>
    );
};

export default Product;