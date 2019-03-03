import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, loadMoreProducts, addProductToBasket } from '../../actions';
import { getProducts } from '../../selectors';
import { Row, Col, Image, Button } from 'react-bootstrap';
import * as R from 'ramda';
import classes from './Products.css';

class Products extends Component {
    componentDidMount(){
        this.props.fetchProducts()
    }


    renderProduct(product,index){
        const{addProductToBasket} = this.props
        const shortDesc = `${R.take(60, product.description)}...`
        return(
            <Col xs={12} sm={6} md={6} lg={4}  key={index}>
                <div>
                    <Image src={product.image} alt={product.name} rounded fluid/>
                </div>
                <div className={classes.Caption}>
                    <div className={classes.CaptionHeading}> 
                        <h4>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </h4>
                        <h5>{product.price} $</h5>
                    </div>
                    <p>{shortDesc}</p>
                    <div className={classes.ItemButton}>
                        <Button 
                        variant='dark'
                        onClick={()=>addProductToBasket(product.id)}>Buy now!</Button>
                        <Button  variant='outline-dark' className={classes.OutlineButton}>
                            <Link to={`/products/${product.id}`}>More info</Link>
                        </Button>
                    </div>
                </div>
            </Col>
        )
    }

    render(){
        const {products, loadMoreProducts} = this.props
        
        return(
            <>
                <Row className={classes.Products}>
                    {products.map((product, index) => this.renderProduct(product,index))}
                </Row>
                <Row className={classes.LoadMoreBtnBlock}>
                    <Col md={12}>
                        <Button 
                        onClick ={loadMoreProducts}
                        variant='outline-dark'
                        >Load more</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state =>({
    products: getProducts(state)
})

const mapDispatchToProps = {
    fetchProducts,
    loadMoreProducts,
    addProductToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);//connecting react and redux
