import React from 'react';
import ShoppinIcon from  '../../assets/shopping-bag.png';
import {connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.css';


const CartIcon = ({toggleCartHidden}) =>
(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img className="shopping-icon" src={ShoppinIcon} />
        <span className="item-count">0</span>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);