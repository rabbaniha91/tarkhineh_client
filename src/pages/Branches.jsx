import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from "../components/Carousel"
import SliderSwiper from '../components/SliderSwiper'
import { mainFoodData } from "../data/foodData"

const Branches = () => {
  const [specialOffer, setSpecialOffer] = useState(null)
  const [popularFoods, setPopularFoods] = useState(null)
  useEffect(() => {
    setSpecialOffer(mainFoodData.filter(food => {
      return food.offer > 0
    }))

    setPopularFoods(mainFoodData.filter(food => {
      return food.score >= 4
    }))
  }, [])


  return (
    <div>
      <Navbar />
      <Carousel />
      {specialOffer !== null && (
        <SliderSwiper title={"پیشنهاد ویژه"} foods={specialOffer} bgColor={"var(--neutral-white)"} />
      )}
      {popularFoods !== null && (
        <SliderSwiper title={"غذاهای محبوب"} foods={popularFoods} bgColor={"var(--green-primary)"} />
      )}
    </div>
  )
}

export default Branches