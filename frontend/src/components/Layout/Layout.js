import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Layout.css';


const Layout = (props) => {
    
    return (
        <section className="layout-wrapper">
            <Header />
            {props.children}
        </section>

    )
}
export default Layout;