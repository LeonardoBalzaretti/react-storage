import initialState from '../../store/initialState'
import * as types from './types'
export default function blogReducer(state = initialState.product, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return {
                ...state,
                list: action.products
            }
        default:
            return state
    }
}