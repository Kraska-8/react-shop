import * as actionTypes from '../actionTypes'; // Importing constants of action types to avoid misspellings
import * as R from 'ramda';

const initialState = {

}

export default (state = initialState,{type, payload}) => {
    switch(type){
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case actionTypes.LOAD_MORE_PRODUCTS_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        case actionTypes.FETCH_PRODUCTS_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default:
            return state
    }
}
