import * as actionTypes from '../actionTypes'; // Importing constants of action types to avoid misspellings
import * as R from 'ramda';

const initialState = []

export default  (state = initialState,{type, payload})=>{
    switch(type){
        case actionTypes.ADD_PRODUCT_TO_BASKET:
            return R.append(payload, state) //returning aray with added element
        case actionTypes.REMOVE_PRODUCT_FROM_BASKET:    
            return R.without(R.of(payload), state) //returning aray without rejected element
        case actionTypes.CLEAN_BASKET:
            return [] //returning empty aray 
        default:
            return state
    }
}