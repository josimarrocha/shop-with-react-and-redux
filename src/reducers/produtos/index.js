import { SHOW_PRODUTOS, PRODUCTS_SEARCH_BRAND, UPDATE_DATA, PRODUCTS_SEARCH_INPUT } from './actions'

const initialState = {
  data: []
}

const updateProducts = (dados, payload) => {
  return dados.map(product => product.id === payload.product.id
    ? { ...payload.product, inCart: payload.inCart }
    : product
  )
}
const produtos = (state = initialState, action) => {
  const regex = new RegExp(action.payload, 'ig')
  switch (action.type) {
    case SHOW_PRODUTOS:
      return {
        ...state,
        data: state.data.length > 0 ? state.data : action.payload.produtos,
        produtos: state.data.length > 0 ? state.data : action.payload.produtos,
        brands: action.payload.brands
      }
    case PRODUCTS_SEARCH_BRAND:
      return {
        ...state,
        produtos: state.data.filter(product => product.brand === action.payload)
      }
    case PRODUCTS_SEARCH_INPUT:
      return {
        ...state,
        produtos: state.data.filter(product => regex.exec(product.title) || regex.exec(product.description))
      }
    case UPDATE_DATA:
      return {
        ...state,
        produtos: updateProducts(state.produtos, action.payload),
        data: updateProducts(state.data, action.payload),
      }
    default:
      return state
  }
}

export default produtos