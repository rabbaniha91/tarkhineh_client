import React, { useEffect, useRef } from 'react'
import SecondFoodCart from '../useFull/SecondFoodCart'
import styles from "./styles.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderSwiper = ({ title, foods, bgColor }) => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)

    useEffect(() => {
        const prev = () => {
            swiperRef.current?.swiper.slidePrev()
        }
        const next = () => {
            swiperRef.current?.swiper.slideNext()
        }
        prevRef.current?.addEventListener("click", prev)
        nextRef.current?.addEventListener("click", next)

        return () => {
            prevRef.current?.removeEventListener("click", prev)
            nextRef.current?.removeEventListener("click", next)
        }
    }, [swiperRef.current, prevRef.current, nextRef.current])

    return (
        <div style={{ backgroundColor: bgColor }} className={styles.conatiner}>
            <div>
                <h4>{title}</h4>
                <swiper-container ref={swiperRef} className="mySwiper" slides-per-view="4"
                    space-between="0" free-mode="true" >
                    {foods?.map(food => (
                        <swiper-slide key={food?.foodName}>
                            <SecondFoodCart food={food} />
                        </swiper-slide>
                    ))}

                </swiper-container>
                <span ref={prevRef} className={styles.prev}>
                    <IoIosArrowForward color='var(--neutral-353535)' size={24} />
                </span>
                <span ref={nextRef} className={styles.next}>
                    <IoIosArrowBack color='var(--neutral-353535)' size={24} />
                </span>
            </div>
        </div>
    )
}

export default SliderSwiper


