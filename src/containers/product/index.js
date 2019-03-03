import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById, addProductToBasket } from '../../actions';
import { getProductById } from '../../selectors';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import classes from './Product.css';

class Product extends Component {
    componentDidMount(){
        this.props.fetchProductById(this.props.match.params.id)
    }

    renderFields(){
        const {product} = this.props
        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'Height',
                'Width',
                'Wheels',
                'Weight',
                'Folded',
                'Frame',
                'StandUp'
            ])
        )(product)

        return columnFields.map(([key,value])=>(
            <div className={classes.ProductDetails} key={key}>
                <div className={classes.Title}>
                    <p>{key}</p>
                </div>
                <div className={classes.Info}>
                    <p>{value}</p>
                </div>
            </div>
        ))
    }

    renderControls(){
        const {product, addProductToBasket} = this.props
        return(
            <div  className={classes.controlBtns}>
                <Button variant='success'
                onClick={()=>addProductToBasket(product.id)}>
                    Add to cart
                </Button>
                <Button variant='dark' className={classes.BtnDark}>
                    <Link to='/'> Back to store</Link>
                </Button>
            </div>
        )
    }
   
    renderContent(){
        const {product} = this.props
        return(
            <div>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} rounded fluid/>
                    </Col>
                    <Col md={6}>
                        <h4>{product.name}</h4>
                        <h4>{product.price} $</h4>
                        <p>{product.description}</p>
                        {product && this.renderControls()}
                    </Col>
                </Row>
                <div className={classes.ProductCaption}>
                    <h4>Description</h4>
                    {product && this.renderFields()}
                </div>
            </div>
        )
    }

    render(){
        const {product} = this.props
        return(
            <>
                <Row className={classes.Product}>
                    <Col md={12}>
                    <div>{product && this.renderContent()}</div>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state =>({
    product: getProductById(state, state.productPage.id)
})


const mapDispatchToProps = {
    fetchProductById,
    addProductToBasket
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);//connecting react and redux