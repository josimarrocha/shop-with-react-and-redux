import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CartItem from '../../components/CartItem'

const CartProducts = ({ cart }) => {
  const totalCartValue = () => {
    let total = 0
    cart.forEach(product => {
      const [, price] = product.price.split(' ')
      const qntd = product.qntd
      total += (parseFloat(price) * qntd)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const hasNotItem = () => {
    return (
      <>
        <div className="cart-empty text-center bg-warning mt-4">
          <h4 className='text-center bg-warning py-1'>
            Seu carrinho está vazio
          </h4>
          <Link to='/' className='text-white'>Clique aqui</Link> para começar a adicionar produtos
        </div>
      </>
    )
  }
  return (
    <div className="col-lg-9 col-md-12 col-sm-12 mt-2">
      <h2 className='text-center text-uppercase font-italic'>
        Seu carrinho
      </h2>
      {!cart.length ? hasNotItem() :
        <div className="cart mt-4">
          <ul className="list-group">
            {!!cart.length && cart.map((cartItem, i) => (
              <CartItem
                key={`cartItem:${i} `}
                product={cartItem}
              />
            ))}
            <li className="list-group-item justify-content-end pr-0">
              <div className='pr-2' style={{ width: '190px' }}>
                <h5 className='mt-2 mb-3 font-italic'>Total: {totalCartValue()}</h5>
                <button className='btn btn-success'>Finalizar compra</button>
              </div>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart
})

export default connect(mapStateToProps)(CartProducts)
