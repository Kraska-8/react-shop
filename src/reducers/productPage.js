import * as actionTypes from '../actionTypes'; // Importing constants of action types to avoid misspellings
import * as R from 'ramda';

const initialState = {
   id: null
}

export default  (state = initialState,{type, payload})=>{
    switch(type){
        case actionTypes.FETCH_PRODUCTS_BY_ID_SUCCESS:
            return {
            ...state,
            id: R.prop('id', payload)
           }
        default:
            return state
    }
}