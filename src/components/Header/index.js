import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showProdutos, searchProductbyInput } from '../../reducers/produtos/actionsCreators'
import { showIntro } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Header = ({ loadingProdutos, loadingIntro, cartLength, searchProducts }) => {
  const searchInput = (e) => {
    e.preventDefault()
    const { input } = e.target
    searchProducts(input.value.trim())
    loadingIntro(false)
  }
  return (
    <header>
      <div className="container-fluid px-2 px-md-5 px-sm-3">
        <div className="row justify-content-between align-items-center">
          <div className="brand col-8 col-md-8 col-lg-4">
            <Link to='/' onClick={() => { loadingIntro(true); loadingProdutos() }}><h3>Top Smartphones</h3></Link>
          </div>
          <div className="search col-lg-5 d-none d-lg-block">
            <form action="" onSubmit={searchInput}>
              <div className="input-control">
                <input
                  type="text"
                  className='form-control input-search'
                  aria-label="Usuário"
                  placeholder='Pesquisar produto'
                  name="input" />
              </div>
            </form>
          </div>
          <div className="cart col-4 col-md-4 col-lg-3 d-flex justify-content-end">
            <Link to='/cart' className='btn btn-primary pr-1' onClick={() => loadingIntro(false)}>
              <i className="fas fa-cart-plus cart-icone mr-md-3">
                {!!cartLength && <span className='cart-number-total'>{cartLength}</span>}
              </i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  cartLength: state.shoppingCart.cart.length
})

export default connect(mapStateToProps,
  {
    loadingProdutos: showProdutos,
    loadingIntro: showIntro,
    searchProducts: searchProductbyInput
  })(Header)
