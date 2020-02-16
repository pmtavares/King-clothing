import React from 'react';
import ShoppinIcon from  '../../assets/shopping-bag.png';

import './cart-icon.styles.css';


const CartIcon = () =>
(
    <div className="cart-icon">
        <img className="shopping-icon" src={ShoppinIcon} />
        <span className="item-count">0</span>
        
    </div>
);


export default CartIcon;