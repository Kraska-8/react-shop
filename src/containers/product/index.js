import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById, addProductToBasket } from '../../actions';
import { getProductById } from '../../selectors';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

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
            <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    <p>{value}</p>
                </div>
            </div>
        ))
    }

    renderControls(){
        const {product, addProductToBasket} = this.props
        return(
            <div className='control-buttons'>
                <Button variant='success'
                onClick={()=>addProductToBasket(product.id)}>
                    Add to cart
                </Button>
                <Button variant='dark'>
                    <Link to='/'> Back to store</Link>
                </Button>
            </div>
        )
    }
   
    renderContent(){
        const {product} = this.props
        return(
            <div className='thumbnail'>
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
                <div className='caption-full'>
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
                <Row>
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