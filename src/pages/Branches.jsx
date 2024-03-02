import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from "../components/Carousel"
import SliderSwiper from '../components/SliderSwiper'
import { mainFoodData } from "../data/foodData"
import Buttons from '../components/useFull/Buttons/Buttons'
import { IoMdClipboard } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom'
import BranchesDetails from '../components/BranchesDetails'

const Branches = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [specialOffer, setSpecialOffer] = useState(null)
  const [popularFoods, setPopularFoods] = useState(null)
  const [nonPersianFoods, setNonPersianFoods] = useState(null)
  const [branch, setBranch] = useState(null)


  useEffect(() => {
    setSpecialOffer(mainFoodData.filter(food => {
      return food.offer > 0
    }))

    setPopularFoods(mainFoodData.filter(food => {
      return food.score >= 4
    }))

    setNonPersianFoods(mainFoodData.filter(food => {
      return food.subCategory === "غذای غیر ایرانی"
    }))

  }, [])

  useEffect(() => {
    setBranch(location.state)
  }, [location.state])


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
      {nonPersianFoods !== null && (
        <SliderSwiper title={"غذاهای غیرایرانی"} foods={nonPersianFoods} bgColor={"var(--neutral-white)"} />
      )}
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "24px"
      }}>
        <Buttons
          bgColor={"transparent"}
          borderColor={"var(--green-primary)"}
          color={"var(--green-primary)"}
          text={"مشاهده منوی کامل"}
          icon={<IoMdClipboard size={24} />}
          exteraRadius={false}
          width={"220px"}
          thin
          border
          onClick={() => {
            navigate("/menu")
          }}
        />
      </div>
      {branch !== null && (
        <BranchesDetails branch={branch} />
      )}
    </div>
  )
}

export default Branches