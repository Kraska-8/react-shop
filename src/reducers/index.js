import {combineReducers} from 'redux';
import products from './products';
import productsPage from './productsPage';
import productPage from './productPage';
import basket from './basket';

export default combineReducers({
    products,
    productsPage,
    productPage,
    basket
})