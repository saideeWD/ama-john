import React, { useContext } from 'react';
import'./Header.css';
import Logo from'../../images/logo.png'
import { Link } from 'react-router-dom';
import { UserContaxt } from '../../App';

const Header = () => {
    const [loggedInUser, setloggedInUser] =useContext(UserContaxt);



    return (
        <div className='header' >
            <img src={Logo} alt="" />

            <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order review</Link>
            <Link to="/manage"> Manage invantory</Link>
            <button style={{backgroundColor:"black",color:'white'}} onClick={()=>setloggedInUser({})}>Sign Out</button></nav>
            

    
 
        </div>
    );
};

export default Header;