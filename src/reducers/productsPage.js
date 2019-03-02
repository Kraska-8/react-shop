import * as actionTypes from '../actionTypes'; // Importing constants of action types to avoid misspellings
import * as R from 'ramda';

const initialState = {
   ids:[]
}

export default  (state = initialState,{type, payload})=>{
    switch(type){
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{ 
            ...state,
            ids: R.pluck('id', payload)
            }

        case actionTypes.LOAD_MORE_PRODUCTS_SUCCESS:
            const ids = R.pluck('id', payload)
            return {
                ...state,
                ids: state.ids.concat(ids)
            }
        default:
            return state
    }
}