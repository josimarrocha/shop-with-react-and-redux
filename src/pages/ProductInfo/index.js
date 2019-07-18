import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { showIntro } from '../../reducers/ui/actionsCreators'
import { updateData } from '../../reducers/produtos/actionsCreators'
import { addItemCart } from '../../reducers/shoppingCart/actionsCreators'

const ProductInfo = ({ showIntroMain, match: { params }, products, addProduct, updateDB }) => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    showIntroMain(false)
    if (products) {
      const getProduct = products.filter(item => item.id === +params.id)[0]
      setProduct(getProduct)
    }
  }, [products, params.id, showIntroMain])

  const addItem = product => {
    addProduct(product)
    updateDB(product, true)
  }

  let TagLinkOrButton = '';
  const tagLinkOrButton = (inCart) => {
    TagLinkOrButton = inCart ? TagLinkOrButton = Link : TagLinkOrButton = 'a'
  }

  return (
    <>
      {product.hasOwnProperty('id') &&
        <section className="col-lg-10 col-md-12 col-sm-12 mt-2">
          <article className="phone-info row">
            <div className="phone-image col-md-5">
              <img src={`http://localhost:3000/${product.imageBig}`} alt='' className='img-fluid mb-3' />
            </div>
            <div className="phone-ficha col-md-7">
              <h3>{product.price}</h3>
              <p className='mt-2'>{product.title}</p>
              <h5>Dados Técnicos</h5>
              <p>{product.description}</p>
              <div className="d-flex">
                <Link to='/' className='btn btn-secondary mr-2'>
                  <i className="fas fa-arrow-left mr-2"></i>
                  Continuar comprando
              </Link>
                {tagLinkOrButton(product.inCart)}
                <TagLinkOrButton
                  to={product.inCart ? '/cart' : ''}
                  className={`btn btn-${product.inCart ? 'info' : 'primary'} text-white`}
                  onClick={() => !product.inCart ? addItem(product) : null}
                >
                  <i className={`${product.inCart ? 'fas fa-cart-plus' : 'fas fa-plus-circle'} mr-2`} />
                  {product.inCart ? 'Ir para o carrinho' : 'Adicionar ao carrinho'}
                </TagLinkOrButton>
              </div>
            </div>
          </article>
        </section>
      }
    </>
  )
}

const mapStateToProps = state => ({
  products: state.produtos.produtos && state.produtos.produtos
})

export default connect(mapStateToProps,
  {
    showIntroMain: showIntro,
    addProduct: addItemCart,
    updateDB: updateData
  })(ProductInfo)