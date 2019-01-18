import * as types from './types'
export function loadProducts(products) {
    return { type: types.LOAD_PRODUCTS, products }
}