import React, { Component } from 'react'
import './assets/css/bootstrap.min.css'
import './assets/css/ecommerce-style.css'

import CustomNav from './Component/Nav'
import CustomHeader from './Component/Header'
import CustomProduct from './Component/Product'
import CustomFooter from './Component/Footer'

import Calculator from './Container/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav nama='ECOECO'/>
        <CustomHeader />
        <Calculator
          title = 'Kalkulator'
          buttonName = 'Hitung!'
          tambahOp = {true}
          kurangOp = {true}
          />
        <CustomFooter />
      </div>
    )
  }
}

export default App