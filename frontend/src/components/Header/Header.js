import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import './Header.css';

const Header = (props) => {
    const { email, SetEmail } = useContext(UserContext);

    return (
        <header className="navigation-header">
            <nav>
                <ul className="navigation-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {email == '' ?
                        <>
                            <li>
                                <Link to="/authentication/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/authentication/login">Login</Link>
                            </li>
                        </> :
                        <>
                        <li>
                            <Link to="/myProducts">My Products</Link>
                        </li>
                            <li>
                                <Link to="">Hello, {email}!</Link>
                            </li>
                            <li>
                                <Link to="" onClick={() => {
                                    localStorage.removeItem('email')
                                    SetEmail('')
                                }}>Logout</Link>
                            </li>
                        </>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;