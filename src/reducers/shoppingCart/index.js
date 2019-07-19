import { ADD_ITEM_CART, REMOVE_ITEM_CART, ADD_QNTD, REMOVE_QNTD, LOADING_PRODUCTS_STORAGE } from './actions'

const initialState = {
  cart: []
}
const shoppingCart = (state = initialState, action) => {
  let products
  switch (action.type) {
    case LOADING_PRODUCTS_STORAGE:
      return {
        cart: action.payload
      }
    case ADD_ITEM_CART:
      products = state.cart.concat({ ...action.payload, inCart: true, qntd: 1 })
      localStorage.setItem('@cartProducts', JSON.stringify({ products }))
      return {
        ...state,
        cart: products
      }
    case REMOVE_ITEM_CART:
      products = state.cart.filter(itemCart => itemCart.id !== action.payload)
      localStorage.setItem('@cartProducts', JSON.stringify({ products }))
      return {
        ...state,
        cart: products
      }
    case ADD_QNTD:
      return {
        ...state,
        cart: state.cart
          .map(itemCart => itemCart.id === action.payload
            ? { ...itemCart, qntd: itemCart.qntd += 1 }
            : itemCart
          )
      }
    case REMOVE_QNTD:
      return {
        ...state,
        cart: state.cart
          .map(itemCart => itemCart.id === action.payload
            ? { ...itemCart, qntd: itemCart.qntd -= 1 }
            : itemCart
          )
      }
    default:
      return state
  }
}

export default shoppingCart