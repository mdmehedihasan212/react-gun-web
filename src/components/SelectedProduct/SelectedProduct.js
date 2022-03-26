import React from 'react';
import './SelectedProduct.css';
import { MdDeleteForever } from 'react-icons/md';

const SelectedProduct = ({ cart }) => {
    // console.log(cart);
    const { img, name } = cart;

    return (
        <div className="selected-product">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <button className="delete-btn">
                <MdDeleteForever className="delete-icon" />
            </button>
        </div>
    );
};

export default SelectedProduct;