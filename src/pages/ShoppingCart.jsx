import React from 'react'
import Navbar from '../components/Navbar'
import Stepper from '../components/Stepper/Stepper'
import CartItemBox from '../components/CartItemBox'
import Footer from "../components/Footer"
import CheckOutBox from '../components/CheckOutBox'

const ShoppingCart = () => {
  return (
    <div>
      <Navbar />
      <Stepper />
      <CartItemBox />
      <Footer />
    </div>
  )
}

export default ShoppingCart