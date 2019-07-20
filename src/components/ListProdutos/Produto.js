import React from 'react'
import { Link } from 'react-router-dom'

const Produto = ({ produto, updateDB, addItemCart, cart }) => {
  const updateDataAndAddToCart = (produto) => {
    addItemCart(produto)
    updateDB(produto, true)
  }
  const hasProductCart = (id) => {
    let hasProduct = false
    !!cart.cart.length && cart.cart.forEach(product => {
      if (product.id === id) {
        hasProduct = product.inCart
      }
    })
    return hasProduct
  }

  return (
    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-3 px-1 px-md-2">
      <div className='card p-1'>
        <Link to={`/product/${produto.id}`} style={{ color: 'black' }} className='align-items-center d-flex flex-column'>
          <div>
            <img
              src={`${produto.image}`}
              className='img-fluid card-img-top' alt=""
              style={{ maxHeight: '200px' }}
            />
          </div>

          <div className="card-body p-2">
            <h5 className='card-title mb-1'>{produto.price}</h5>
            <p className="card-text">{produto.title}</p>
          </div>
        </Link>
        <button
          type='button'
          disabled={hasProductCart(produto.id)}
          className={`btn btn-${hasProductCart(produto.id) ? 'success disabled' : 'primary'} d-block`}
          onClick={() => updateDataAndAddToCart(produto)}
        >
          <i className={`${hasProductCart(produto.id) ? 'far fa-check-circle' : 'fas fa-plus-circle'} mr-2`} />
          {hasProductCart(produto.id) ? 'Adicionado' : 'Adicionar'}
        </button>
      </div>
    </div>
  )
}

export default Produto
