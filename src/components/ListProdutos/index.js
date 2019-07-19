import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateData } from '../../reducers/produtos/actionsCreators'
import { addItemCart } from '../../reducers/shoppingCart/actionsCreators'
import Produto from './Produto'

import './styles.css'

const ListProdutos = ({ produtos, addProduct, updatedb, cart }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(produtos)
  }, [produtos, products])

  return (
    <div className="col-lg-10 col-md-12 col-sm-12 mt-2">
      <div className="products">
        <div className="row">
          {products && products.map(produto => (
            <Produto
              key={`produto:${produto.id}`}
              produto={produto}
              addItemCart={addProduct}
              updateDB={updatedb}
              cart={cart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  produtos: state.produtos.produtos,
  productsSearch: state.produtos.productsSearchBrand,
  cart: state.shoppingCart
})

export default connect(mapStateToProps,
  {
    addProduct: addItemCart,
    updatedb: updateData,
  })(ListProdutos)
