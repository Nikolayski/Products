import React, { useContext, useState } from 'react';
import './Login.css';
import UserContext from '../Contexts/UserContext';
import { Button, FormControl, FromControl, Input, InputLabel } from '@material-ui/core';
import * as ProdService  from '../../services/CopmonentService';

const Login = (props) => {
    const { email, SetEmail } = useContext(UserContext)
    const [isFreeEmail, SetIsFreeEmail] = useState(true);

    const loginHandler = event => {
        event.preventDefault();
        const [email, password] = event.target;
        const user = {
            email: email.value,
            password: password.value
        }
            ProdService.Login(user)
            .then(data => {
                if (data.toLowerCase() == 'inserted') {
                    localStorage.setItem('email', email.value)
                    SetEmail(email.value);
                    props.history.push('/');
                }
                else {
                    SetIsFreeEmail(false);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <section className="login-wrapper">
            <form onSubmit={loginHandler}>
                <FormControl className="form-control">
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input type="email" id="email" name="email" />
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel htmlFor="confirmPassword">Password</InputLabel>
                    <Input type="password" id="confirmPassword" name="confirmPassword" />
                </FormControl>
                <Button variant="contained" color="primary" type="submit">Login</Button>
                {!isFreeEmail ? <span style={{ color: 'red' }}>Invalid email/password!</span> : ''}
            </form>
        </section>
    )
}

export default Login;
