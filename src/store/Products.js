import * as actions from './product/actions'

export function loadProducts() {
    var data = require('../data.json').sort(() => 0.5 - Math.random());
    return dispatch =>
        dispatch(actions.loadProducts(data));
}