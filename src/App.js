import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import ListBrands from './components/ListBrands'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import { showProdutos } from './reducers/produtos/actionsCreators'
import 'bootstrap-css'

function App({ loadingProdutos, visible }) {
  useEffect(() => {
    loadingProdutos()
  }, [loadingProdutos])

  return (
    <Router>
      <Header />
      {visible.showIntro === true && <Carousel />}
      <div className="container-fluid py-4">
        <div className="row px-md-3 px-1">
          <ListBrands />
          <Routes />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

const mapStateToProps = state => ({
  visible: state.ui
})

export default connect(mapStateToProps,
  {
    loadingProdutos: showProdutos,
  })(App)
