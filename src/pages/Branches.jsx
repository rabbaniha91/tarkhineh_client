import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from "../components/Carousel"
import SliderSwiper from '../components/SliderSwiper'

const Branches = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <SliderSwiper title={"پیشنهاد ویژه"}/>
    </div>
  )
}

export default Branches