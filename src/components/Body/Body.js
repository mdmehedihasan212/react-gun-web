import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Body.css';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...carts, product]
        setCarts(newCart)
    }

    return (
        <div className="body-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="selected-container">
                <h2>Selected Item</h2>
                {
                    carts.map(cart => <SelectedProduct key={cart.id} cart={cart}></SelectedProduct>)
                }
            </div>
        </div>
    );
};

export default Body;