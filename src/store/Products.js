import * as actions from './product/actions'

export function loadProducts() {
    var data = require('../data.json').sort(() => 0.5 - Math.random());
    return dispatch => {
        dispatch(actions.loadingProducts())
        setTimeout(() => dispatch(actions.loadingProducts(false)), 1000)
        return dispatch(actions.loadProducts(data));
    }
}