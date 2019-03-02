import React from 'react';
import BasketCart from '../basketCart';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <Link to='/'>
                <Image src='/uploads/Logo.svg' alt='˜Logo' fluid/>         
            </Link>
            <h2>Welcome to our online shop!</h2>
            <BasketCart/>
        </div>
    )
}


export default Sidebar;