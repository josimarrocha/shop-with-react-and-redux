import React from 'react'
import { Link } from 'react-router-dom'

const Produto = ({ produto, updateDB, addItemCart }) => {
  const updateDataAndAddToCart = (produto) => {
    addItemCart(produto)
    updateDB(produto, true)
  }
  return (
    <div className="col-md-3 col-sm-4 col mb-3 px-1 px-md-2">
      <div className='card p-1'>
        <Link to={`/product/${produto.id}`} style={{ color: 'black' }} className='align-items-center d-flex flex-column'>
          <div>
            <img
              src={`http://localhost:3000/${produto.image}`}
              className='img-fluid card-img-top' alt=""
              style={{ maxHeight: '200px' }}
            />
          </div>

          <div className="card-body p-2 w-100">
            <h4 className='card-title mb-1'>{produto.price}</h4>
            <p className="card-text">{produto.title}</p>
          </div>
        </Link>
        <button
          type='button'
          disabled={produto.inCart ? true : false}
          className={`btn btn-${produto.inCart ? 'success disabled' : 'primary'} d-block`}
          onClick={() => updateDataAndAddToCart(produto)}
        >
          <i className={`${produto.inCart ? 'far fa-check-circle' : 'fas fa-plus-circle'} mr-2`} />
          {produto.inCart ? 'Adicionado' : 'Adicionar'}
        </button>
      </div>
    </div>
  )
}

export default Produto
