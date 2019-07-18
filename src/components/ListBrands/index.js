import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showIntro } from '../../reducers/ui/actionsCreators'
import { searchProductByBrand } from '../../reducers/produtos/actionsCreators'
import './styles.css'

const ListBrands = ({ brands, showIntroMain, searchToBrand }) => {
  const search = (item) => {
    showIntroMain(false)
    searchToBrand(item)
  }
  return (
    <div className='col-12 col-lg-2 d-lg-block brands text-right mb-2'>
      <ul className='list-group mt-2 align-content-end flex-row flex-lg-column flex-wrap'>
        <li className='list-group-item brands-header-title text-uppercase'>
          Marcas
        </li>
        {brands && brands.map((item, index) => (
          <Link key={`brand:${item}`} to={`/brand/${item}`} onClick={() => search(item)}>
            <li className='justify-content-end list-group-item px-4 teste'>
              {item}
              <i className="fas fa-arrow-right ml-3 d-none d-lg-block"></i>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  brands: state.produtos.brands
})


export default connect(mapStateToProps, { showIntroMain: showIntro, searchToBrand: searchProductByBrand })(ListBrands)
