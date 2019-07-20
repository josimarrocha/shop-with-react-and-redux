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
      <li className="cart-item list-group-item p-1 pl-0 ">
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex d-md-block justify-content-center'>
          <img
            src={`${product.image}`}
            className='img-thumbnail' alt="" />
        </div>
        <div className="cart-products-name col-lg-3 col-md-3 col-sm-12">
          <p className=''>Produto</p>
          <h6>{product.title}</h6>
        </div>
        <div className="cart-products-price col-lg-2 col-md-2 col-sm-12">
          <p className=''>Preço</p>
          <h6>{product.price}</h6>
        </div>
        <div className="cart-products-brand col-lg-2 col-md-2 ">
          <p className=''>Marca</p>
          <h6>{product.brand}</h6>
        </div>
        <div className="cart-products-count col-lg-2 col-md-2 pl-0">
          <p className=''>Quantidade</p>
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
        <div className="cart-products-delete d-flex flex-column col-1 align-items-center ml-3 ml-md-0">
          <p className='d-none d-md-block'>Excluir</p>
          <i className="fas fa-trash"
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
