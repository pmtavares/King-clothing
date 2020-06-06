import React from 'react';
import {Link} from 'react-router-dom';
import crown from  '../../assets/crown.png';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

import './header.style.css';


const Header = ({currentUser, hidden}) =>
{
    console.log("Current user: "+ currentUser)
    return(
 
    <HeaderContainer>
         <LogoContainer to="/">
            <img src={crown} className="crown-image" alt="Home page"/>
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>           
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
                <OptionLink to="/signin">SIGNIN</OptionLink>
            }
            <CartIcon />
         </OptionsContainer>
         {
             hidden? null : <CartDropdown />
         }
         
    </HeaderContainer>
    );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);