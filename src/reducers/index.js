import { combineReducers } from 'redux'
import produtos from './produtos'
import ui from './ui'
import shoppingCart from './shoppingCart'
import carossel from './caroussel'

export default combineReducers({
  produtos,
  ui,
  shoppingCart,
  carossel
})