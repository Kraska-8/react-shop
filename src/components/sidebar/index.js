import React from 'react';
import BasketCart from '../basketCart';
import Search from '../search';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './Sidebar.css';

const Sidebar = () =>{
    return(
        <div className={classes.Sidebar}>
            <Link to='/'>
                <Image src='/uploads/Logo.svg' alt='˜Logo' fluid/>         
            </Link>
            <h2>Welcome to our online shop!</h2>
            <BasketCart/>
            <Search/>
        </div>
    )
}

export default Sidebar;