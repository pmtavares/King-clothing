import React from 'react';
import './signin-and-signup.styles.css';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/sign-up/sign-up.component';
import './signin-and-signup.styles.css';


const SigninAndSignup = () =>
(
    <div className="sign-in-and-sign-up">
        <Signin />
        <Signup />
    </div>
);

export default SigninAndSignup;

