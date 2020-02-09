import React from 'react';

import './signin.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class Signin extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: 'pedro@pedro.com',
            password: 'test'
        };
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                            value={this.state.email} 
                            required 
                            onChange={this.handleChange}
                            label="Email">
                        </FormInput>
                    <FormInput name="password" type="password" value={this.state.password} required
                            onChange={this.handleChange} label="Password">
                    </FormInput>
                    <div className="buttons">
                        <CustomButton type="submit"> Signin</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin> Signin with google</CustomButton>
                    </div>                    
                </form>
            </div>
        );
    }

}

export default Signin;