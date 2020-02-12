import React from 'react';
import {Link} from 'react-router-dom';
import crown from  '../../assets/crown.png';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';

import './header.style.css';


const Header = ({currentUser}) =>
(
    <div className="header">
         <Link className="logo-container" to="/">
            <img src={crown} className="crown-image" alt="Home page"/>
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>           
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className="option" to="/signin">SIGNIN</Link>
            }
         </div>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);