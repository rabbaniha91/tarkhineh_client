import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from "../components/Carousel"
import SliderSwiper from '../components/SliderSwiper'
import { mainFoodData } from "../data/foodData"

const Branches = () => {
  const [specialOffer, setSpecialOffer] = useState(null)
  useEffect(() => {
    setSpecialOffer(mainFoodData.filter(food => {
      return food.offer > 0
    }))
  }, [])


  return (
    <div>
      <Navbar />
      <Carousel />
      {specialOffer !== null && (
        <SliderSwiper title={"پیشنهاد ویژه"} foods={specialOffer} bgColor={"var(--neutral-white)"}/>
      )}
    </div>
  )
}

export default Branches