import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { showIntro } from '../../reducers/ui/actionsCreators'
import { showProdutos } from '../../reducers/produtos/actionsCreators'
import ListProdutos from '../../components/ListProdutos'

const Home = ({ showIntroMain, match, loadingProducts }) => {
  useEffect(() => {
    if (match.path === '/') {
      showIntroMain(true)
      loadingProducts()
    }
  }, [match.path, showIntroMain, loadingProducts])
  return (
    <>
      <ListProdutos />
    </>
  )
}

export default connect(null, { showIntroMain: showIntro, loadingProducts: showProdutos })(Home)