import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, loadMoreProducts, addProductToBasket } from '../../actions';
import { getProducts } from '../../selectors';
import { Row, Col, Image, Button } from 'react-bootstrap';
import * as R from 'ramda';

class Products extends Component {
    componentDidMount(){
        this.props.fetchProducts()
    }
    renderProduct(product,index){
        const{addProductToBasket} = this.props
        const shortDesc = `${R.take(60, product.description)}...`
        return(
            <Col xs={12} sm={6} md={6} lg={4} className='products-list' key={index}>
                <div>
                    <Image src={product.image} alt={product.name} rounded fluid/>
                </div>
                <div className='caption'>
                    <div className='caption-heading'> 
                        <h4>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </h4>
                        <h5>{product.price} $</h5>
                    </div>
                    <p>{shortDesc}</p>
                    <div className='itemButton'>
                        <Button 
                        variant='dark'
                        onClick={()=>addProductToBasket(product.id)}>Buy now!</Button>
                        <Button  variant='outline-dark'>
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
                <Row className='products'>
                    {products.map((product, index) => this.renderProduct(product,index))}
                </Row>
                <Row>
                    <Col md={12}>
                        <Button 
                        onClick ={loadMoreProducts}
                        variant='dark'
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
