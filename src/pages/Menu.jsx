import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import MenuPageTabs from '../components/MenuPageTabs/MenuPageTabs'

const Menu = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <MenuPageTabs />
        </div>
    )
}

export default Menu