import React from 'react'
import { connect } from 'react-redux'
import { updateData } from '../../reducers/produtos/actionsCreators'
import { removeItemCart, addQntd, removeQntd } from '../../reducers/shoppingCart/actionsCreators'
import './styles.css'

const CartItems = ({ product, removeItem, updateDB, addItemQntd, removeItemQntd }) => {
  const deleteItemCart = id => {
    removeItem(id)
    updateDB(product, false)
  }
  return (
    <>
      <li className="cart-item list-group-item p-1 pl-3 ">
        <img src={`http://localhost:3000/${product.image}`} className='img-thumbnail mr-4' alt="" />
        <div className="cart-products-name">
          <p className='mb-2'>Produto</p>
          <h6>{product.title}</h6>
        </div>
        <div className="cart-products-price">
          <p className='mb-3'>Preço</p>
          <h6>{product.price}</h6>
        </div>
        <div className="cart-products-brand">
          <p className='mb-3'>Marca</p>
          <h6>{product.brand}</h6>
        </div>
        <div className="cart-products-count">
          <p className='mb-2'>Quantidade</p>
          <div className="qndt d-flex">
            <button className='btn btn-danger py-1 px-2'
              onClick={() => product.qntd > 1 && removeItemQntd(product.id)}
            >
              <i className='fas fa-plus-circle' />
            </button>
            <input type="text" className='form-control mx-1 p-0 pl-2' readOnly value={product.qntd} />
            <button className='btn btn-success py-0 px-2'
              onClick={() => addItemQntd(product.id)}
            >
              <i className='fas fa-plus-circle' />
            </button>
          </div>
        </div>
        <div className="cart-products-delete d-flex flex-column align-items-center">
          <p className='mb-1'>Excluir</p>
          <i className="fas fa-trash mt-2"
            onClick={() => deleteItemCart(product.id)}
          />
        </div>
      </li>
    </>
  )
}

export default connect(null,
  {
    removeItemQntd: removeQntd,
    addItemQntd: addQntd,
    removeItem: removeItemCart,
    updateDB: updateData
  })(CartItems)
