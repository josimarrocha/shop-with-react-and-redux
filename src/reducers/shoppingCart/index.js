import { ADD_ITEM_CART, REMOVE_ITEM_CART, ADD_QNTD, REMOVE_QNTD } from './actions'

const initialState = {
  cart: []
}
const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return {
        ...state,
        cart: state.cart.concat({ ...action.payload, inCart: true, qntd: 1 })
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cart: state.cart.filter(itemCart => itemCart.id !== action.payload)
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