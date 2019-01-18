import * as types from './types'

export function loadProducts(products) {
    return { type: types.LOAD_PRODUCTS, products }
}

export function loadingProducts(isLoading = true) {
    return { type: types.LOADING_PRODUCTS, isLoading }
}