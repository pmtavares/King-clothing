import React from 'react';
import {connect} from 'react-redux'

import './signin.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

class Signin extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: 'pedro@pedro.com',
            password: 'test'
        };
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

      
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const {googleSignInStart} = this.props;
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
                        <CustomButton type='button' onClick={googleSignInStart} 
                                isGoogleSignin> Signin with google
                        </CustomButton>
                    </div>                    
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin);