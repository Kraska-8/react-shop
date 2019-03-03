import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';
import classes from './BasketCart.css';

const BasketCart = ({totalBasketCount, totalPrice}) => {
    return(
        <div className={classes.BasketCart}>
            <div className={classes.BasketBtn}>
                <Link to='/basket'>
                 <span>{totalBasketCount} item(s) - {totalPrice} $</span>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

export default connect(mapStateToProps) (BasketCart)