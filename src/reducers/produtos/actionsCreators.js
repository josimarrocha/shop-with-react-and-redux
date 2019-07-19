import {
  SHOW_PRODUTOS,
  PRODUCTS_SEARCH_BRAND,
  UPDATE_DATA,
  PRODUCTS_SEARCH_INPUT
} from './actions'

import { LOADING_PRODUCTS_STORAGE } from '../shoppingCart/actions'
import produtos from '../../produtos'

export const showProdutos = () => async dispatch => {
  const productsLocalStorage = JSON.parse(await localStorage.getItem('@cartProducts'))
  await dispatch({
    type: LOADING_PRODUCTS_STORAGE,
    payload: productsLocalStorage
      ? productsLocalStorage.products
      : []
  })

  dispatch({
    type: SHOW_PRODUTOS,
    payload: produtos
  })
}

export const searchProductByBrand = (brand) => dispatch => {
  dispatch({
    type: PRODUCTS_SEARCH_BRAND,
    payload: brand
  })
}

export const searchProductbyInput = (text) => dispatch => {
  dispatch({
    type: PRODUCTS_SEARCH_INPUT,
    payload: text
  })
}

export const updateData = (product, inCart) => async dispatch => {
  await dispatch({
    type: UPDATE_DATA,
    payload: {
      product,
      inCart
    }
  })
}