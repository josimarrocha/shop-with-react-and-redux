import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import CartProducts from './pages/CartProducts'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/cart' component={CartProducts} />
    <Route path='/brand/:brand' component={Home} />
    <Route path='/product/:id' component={ProductInfo} />
  </Switch>
)

export default Routes