import React, { useEffect, useState } from 'react'

import Buttons from "../../useFull/Buttons/Buttons"
import styles from "./styles.module.css"
import useScreenSize from '../../../hooks/useScreenSize';
import FoodShowScreen from '../FoodShowScreen';
import Stars from '../Stars';

const FoodCart = React.memo(({ food }) => {
    const { isSM } = useScreenSize()
    const [priceWithOffer, setPriceWithOffer] = useState(null)
    const [showFullScreenFood, setShowFullScreenFood] = useState(false)

    useEffect(() => {
        if (food.offer > 0) {
            const offerPrice = parseInt(food.price) * ((100 - food.offer) / 100)
            setPriceWithOffer(offerPrice)
        }
    }, [])

    useEffect(() => {
        console.log(showFullScreenFood)
    }, [showFullScreenFood])

    return (
        <div className={styles.container} onClick={() => setShowFullScreenFood(true)}>
            <img src={food.cover} alt="cover" />
            <div className={styles.content_container}>
                <h5>{food.foodName}</h5>
                <div className={styles.inner_content_container}>
                    <p>{food.description}</p>

                    {priceWithOffer !== null ? (
                        <div className={styles.price_container}>
                            <div>
                                <span className={styles.offer}>{
                                    `%${food.offer.toLocaleString("fa-IR")}`}
                                </span>
                                <span className={styles.old_price}>
                                    {parseInt(food.price).toLocaleString("fa-IR")}
                                </span>
                            </div>
                            <span className={styles.new_price}>
                                {priceWithOffer?.toLocaleString("fa-IR")}
                                <span>تومان</span>
                            </span>
                        </div>
                    )
                        :
                        <span className={styles.price}>
                            {parseInt(food.price).toLocaleString("fa-IR")}
                            <span>تومان</span>
                        </span>
                    }

                </div>
                <div className={styles.bottom}>
                    <Stars score={food.score} />
                    <Buttons
                        bgColor={"var(--green-primary)"}
                        text={isSM ? "افزودن به سبد خرید" : "افزودن"}
                        color={"var(--neutral-white)"}
                        hoverBg={"var(--green-green-shade-10)"}
                        width={isSM ? "244px" : "100px"}
                        thin={true}
                    />
                </div>
            </div>
            {showFullScreenFood && (
                <FoodShowScreen food={food} setShowFullScreenFood={setShowFullScreenFood} />
            )}
        </div>
    )
})

export default FoodCart