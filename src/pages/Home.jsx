import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import HomeMenu from '../components/HomeMenu'
import Introduction from '../components/Introduction'
import Tour from '../components/Tour'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <HomeMenu />
            <Introduction />
            <Tour />
            <Footer />
        </div>
    )
}

export default Home