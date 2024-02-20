import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import MenuPageTabs from '../components/MenuPageTabs/MenuPageTabs'
import MenuFoods from '../components/MenuFoods'
import Footer from "../components/Footer"

import { mainFoodCategory, mainFoodData } from "../data/foodData"

const Menu = () => {
    const [menuTitle, setMenuTitle] = useState(1)
    return (
        <div>
            <Navbar />
            <Carousel />
            <MenuPageTabs setMenuTitle={setMenuTitle} />
            {menuTitle === 1 && (
                <MenuFoods foolData={mainFoodData} category={mainFoodCategory} />
            )}
            {menuTitle === 2 && (
                <div>در حال تکمیل</div>
            )}
            {menuTitle === 3 && (
                <div>در حال تکمیل</div>
            )}
            {menuTitle === 4 && (
                <div>در حال تکمیل</div>
            )}
            <Footer />
        </div>
    )
}

export default Menu