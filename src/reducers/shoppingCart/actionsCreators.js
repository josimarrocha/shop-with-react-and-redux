import {
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  ADD_QNTD,
  REMOVE_QNTD,
} from './actions'

export const addItemCart = (produto) => dispatch => {
  dispatch({
    type: ADD_ITEM_CART,
    payload: produto
  })
}

export const removeItemCart = (id) => dispatch => {
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id
  })
}

export const addQntd = id => dispatch => {
  dispatch({
    type: ADD_QNTD,
    payload: id
  })
}

export const removeQntd = id => dispatch => {
  dispatch({
    type: REMOVE_QNTD,
    payload: id
  })
}