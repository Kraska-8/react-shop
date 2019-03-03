import * as actionTypes from '../actionTypes'; // Importing constants of action types to avoid misspellings
import {
    fetchProducts as fetchProductsApi,
    loadMoreProducts as loadMoreProductsApi,
    fetchProductById as fetchProductByIdApi
} from '../api';
import { getRenderedProductsLength } from '../selectors';


export const fetchProducts = () => async dispatch => {
    dispatch({type: actionTypes.FETCH_PRODUCTS_START})
    try{
        const products = await fetchProductsApi()
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: products
        })
    }
    catch(err){
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_FAILURE,
            payload: err,
            error: true
        })
    }
}


export const loadMoreProducts = () => async (dispatch, getState) => {
    const offset = getRenderedProductsLength(getState())
    dispatch({type: actionTypes.LOAD_MORE_PRODUCTS_START})
    try{
        const products = await loadMoreProductsApi({offset})
        
        dispatch({
            type: actionTypes.LOAD_MORE_PRODUCTS_SUCCESS,
            payload: products
        })
    }
    catch(err){
        dispatch({
            type: actionTypes.LOAD_MORE_PRODUCTS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchProductById = id => async dispatch => {
    dispatch({type: actionTypes.FETCH_PRODUCTS_BY_ID_START})
    try{
        const product = await fetchProductByIdApi(id)
        
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_BY_ID_SUCCESS,
            payload: product
        })
    }
    catch(err){
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addProductToBasket = id => dispatch => {
    dispatch({
        type: actionTypes.ADD_PRODUCT_TO_BASKET,
        payload: id
    })
}

export const removeProductFromBasket = id => async dispatch => {
    dispatch({
        type: actionTypes.REMOVE_PRODUCT_FROM_BASKET,
        payload:id
    })
}

export const cleanBasket = () => dispatch => {
    dispatch({
        type: actionTypes.CLEAN_BASKET
    })
}

export const basketCheckout = products => dispatch => {
    alert(JSON.stringify(products))
}

export const searchProduct = text => dispatch => {
    dispatch({
        type: actionTypes.SEARCH_PRODUCT,
        payload: text
    })
}