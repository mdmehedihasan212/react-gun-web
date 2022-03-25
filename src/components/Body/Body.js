import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Body.css';

const Body = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="body-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="selection-container">
                <h2>Selected Item</h2>
            </div>
        </div>
    );
};

export default Body;