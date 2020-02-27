import React from 'react';



import './checkout-item.style.css';


const CheckoutItem = ({cartItem: {name, imageUrl, quantity,price}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl} className="container-image"/>
        </div>
        <span className='name-description'>{name}</span>
        <span className='quantity-item'>{quantity}</span>
        <span className='price-item'>{price}</span>
        <div className="remove-button">&#10005;</div>
        
    </div>
)

export default CheckoutItem;