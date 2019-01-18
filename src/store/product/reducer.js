import initialState from '../../store/initialState'
import * as types from './types'
export default function productReducer(state = initialState.product, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return {
                ...state,
                list: action.products
            }
        case types.LOADING_PRODUCTS:
            return {
                ...state,
                loading: action.isLoading
            }
        default:
            return state
    }
}