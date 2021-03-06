import React, { useState, useContext } from 'react';
import './Register.css';
import UserContext from '../Contexts/UserContext';
import {  Button, FormControl, Input, InputLabel} from '@material-ui/core';
import * as ProdService from '../../services/CopmonentService';

const Register = (props) => {
    const { email, SetEmail } = useContext(UserContext);
    const [passwordError, SetPasswordError] = useState('');
    const [isFreeEmail, SetIsFreeEmail] = useState(false);

    const registerHandler = e => {
        e.preventDefault();
        const [email, password, confirmPassword] = e.target;
        if (password.value != confirmPassword.value) {
            SetPasswordError('Password and Confirm Password should be equal!')
        }
        else {
            var user = {
                email: email.value,
                password: password.value
            }
              ProdService.Register(user)
                .then(data => {
                    if (data.toLowerCase() == 'inserted') {
                        localStorage.setItem('email', email.value)
                        SetEmail(email.value);
                        props.history.push('/');
                    }
                    else {
                        SetIsFreeEmail(true);
                    }
                })
                .catch(error => console.log(error))


        }

    }


    return (

           
            <section className="register-wrapper">
                <form onSubmit={registerHandler}>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input type="email" id="email" name="email" />
                    </FormControl>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" id="password" name="password" />
                        {passwordError ? <span style={{ color: 'red' }} className="reg-span-error"  >{passwordError}</span> : ''}
                    </FormControl>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                        <Input type="password" id="confirmPassword" name="confirmPassword" />
                        {passwordError ? <span style={{ color: 'red' }} className="reg-span-error">{passwordError}</span> : ''}
                    </FormControl>
                    <Button className="register-button" variant="contained" color="primary" type="submit">Register</Button>
                    {isFreeEmail ? <span style={{ color: 'red' }} className="reg-span-email-error">Email is already taken!</span> : ''}
                </form>
            </section>


    )


}

export default Register;



