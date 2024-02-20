import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import Buttons from "../../useFull/Buttons/Buttons"
import styles from "./styles.module.css"

const FoodCart = React.memo(({ food }) => {
    const [priceWithOffer, setPriceWithOffer] = useState(null)
    useEffect(() => {
        if (food.offer > 0) {
            const offerPrice = parseInt(food.price) * ((100 - food.offer) / 100)
            setPriceWithOffer(offerPrice)
        }
    }, [])

    return (
        <div className={styles.container}>
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
                    <div>
                        <CiStar size={24} />
                        <CiStar size={24} />
                        <CiStar size={24} />
                        <CiStar size={24} />
                        <CiStar size={24} />
                    </div>
                    <Buttons
                        bgColor={"var(--green-primary)"}
                        text={"افزودن به سبد خرید"}
                        color={"var(--neutral-white)"}
                        hoverBg={"var(--green-green-shade-10)"}
                        width={"244px"}
                    />
                </div>
            </div>
        </div>
    )
})

export default FoodCart