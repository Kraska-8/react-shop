import React from 'react';
import { connect } from 'react-redux';
import { getBasketProductsWithCount, getTotalBasketPrice } from '../../selectors';
import { removeProductFromBasket, cleanBasket, basketCheckout } from '../../actions';
import * as R from 'ramda';
import { Table, Image, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './Basket.css'


const Basket = ({products, totalPrice, removeProductFromBasket, cleanBasket, basketCheckout }) => {
    const isBasketEmpty = R.isEmpty(products)
    const renderTable = () =>(
        <>
            {isBasketEmpty && 
            <>
            <h3>Your shopping cart is empty</h3>
                <Button variant='dark' className={classes.BtnDark}>
                    <Link to='/'>Begin shopping</Link>
                </Button>
            </>
                }
            {R.not(isBasketEmpty) && 
            <>
                <h3>Your shopping cart</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>   
                        <th>Prewiew</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Remove item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,index) => (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>
                                    <Image src={product.image} alt={product.name} rounded fluid/> 
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price} $</td>
                                <td>{product.count}</td>
                                <td>
                                    <span

                                    className={classes.DeleteItem}
                                    onClick={()=> removeProductFromBasket(product.id)}>
                                    Delete item
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row>
                    <Col lg={6} md={6} className={classes.TotalPrice}>
                        <b>Total:</b> {totalPrice} $
                    </Col>

                    <Col lg={6} md={6} className={classes.BtnsRow}>
                        <Button variant='dark' className={classes.BtnDark}>
                            <Link to='/'>Continue shopping</Link>
                        </Button>
                        <Button variant='danger'
                        onClick={()=>cleanBasket()}>
                            Clean cart
                        </Button>
                        <Button variant='success'
                        onClick={()=>basketCheckout(products)}>
                            Checkout
                        </Button>
                    </Col>
                </Row>
             </>
        }
    </>
    )
    return (
        <div className={classes.Basket}>
            {renderTable()}
        </div>
    )
}

const mapStateToProps = state =>({
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state)
})

const mapDispatchToProps ={
    removeProductFromBasket,
    cleanBasket,
    basketCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)