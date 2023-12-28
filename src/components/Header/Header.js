import React from 'react';
import'./Header.css';
import Logo from'../../images/logo.png'

const Header = () => {

    return (
        <div className='header' >
            <img src={Logo} alt="" />

            <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order review</a>
            <a href="/manage"> Manage invantory</a></nav>
            
    
 
        </div>
    );
};

export default Header;