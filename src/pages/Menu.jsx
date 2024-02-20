import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import MenuPageTabs from '../components/MenuPageTabs/MenuPageTabs'
import MenuFoods from '../components/MenuFoods'

import { mainFoodCategory, mainFoodData } from "../data/foodData"

const Menu = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <MenuPageTabs />
            <MenuFoods foolData={mainFoodData} category={mainFoodCategory} />
        </div>
    )
}

export default Menu