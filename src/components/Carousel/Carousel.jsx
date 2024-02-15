import React from 'react'
import styles from "./styles.module.css"
import { carouselImages } from "../../data/data"
import Buttons from '../useFull/Buttons'

const CarouselComponent = () => {
    return (
        <div className={styles.container}>
            <swiper-container
                className={`mySwiper`}
                pagination="true"
                pagination-dynamic-bullets="true"
                pagination-clickable="true"
                navigation="true"
                loop="true"
                autoplay-delay="3500"
                autoplay-disable-on-interaction="false"
                rtl="true"
                space-between="10"
            >

                <swiper-slide>
                    <img src={`/images/${carouselImages[0]}`} alt={`${carouselImages[0]}`} />
                    <div className={styles.solgun}>
                        <span>تجربه غذای سالم و گیاهی به سبک ترخینه</span>
                        <Buttons
                            text={`سفارش آنلاین غذا`}
                            bgColor={"var(--green-primary)"}
                            color={`var(--neutral-white)`}
                            hoverBg={`var(--green-green-shade-10)`} />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src={`/images/${carouselImages[1]}`} alt={`${carouselImages[1]}`} />
                </swiper-slide>
                <swiper-slide>
                    <img src={`/images/${carouselImages[2]}`} alt={`${carouselImages[2]}`} />
                </swiper-slide>
                <swiper-slide>
                    <img src={`/images/${carouselImages[3]}`} alt={`${carouselImages[3]}`} />
                </swiper-slide>

            </swiper-container>

        </div>
    )
}

export default CarouselComponent