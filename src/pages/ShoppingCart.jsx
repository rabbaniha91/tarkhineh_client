import React from 'react'
import Navbar from '../components/Navbar'
import Stepper from '../components/Stepper/Stepper'
import CartItemBox from '../components/CartItemBox'
import Footer from "../components/Footer"
import CheckOutBox from '../components/CheckOutBox'
import Buystatas from '../components/BuyStates/Buystatas'

const ShoppingCart = () => {
  return (
    <div>
      <Navbar />
      <Buystatas />
      <Footer />
    </div>
  )
}

export default ShoppingCart