import React from 'react';
import ShoppinIcon from  '../../assets/shopping-bag.png';
import {connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.css';


const CartIcon = ({toggleCartHidden,itemCount}) =>

(
    
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img className="shopping-icon" src={ShoppinIcon} />
        <span className="item-count">{itemCount}</span>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => {
    return {itemCount : selectCartItemsCount(state)
}};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);