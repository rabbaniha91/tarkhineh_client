import React, { useEffect, useState } from 'react'

import Buttons from "../../useFull/Buttons/Buttons"
import styles from "./styles.module.css"
import useScreenSize from '../../../hooks/useScreenSize';
import FoodShowScreen from '../FoodShowScreen';
import Stars from '../Stars';
import { saveFoodsToLocalStorage } from "../../../utils"
import { useContentProvider } from '../../../Context/provider';
import { GoTrash } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";


const FoodCart = React.memo(({ food, state = 1 }) => {
    const { isSM } = useScreenSize()
    const [priceWithOffer, setPriceWithOffer] = useState(null)
    const [showFullScreenFood, setShowFullScreenFood] = useState(false)
    const [showState, setShowState] = useState("")
    const { setShowCartNotif } = useContentProvider()

    useEffect(() => {
        if (food.offer > 0) {
            const offerPrice = parseInt(food.price) * ((100 - food.offer) / 100)
            setPriceWithOffer(offerPrice)
        }
        setShowState(state)

    }, [])




    return (
        <>
            <div className={styles.container} style={{ width: showState === 2 && "100%" }}>
                <img
                    src={food.cover} alt="cover"
                    onClick={() => setShowFullScreenFood(true)} />
                {showState === 2 && (
                    <GoTrash size={20} className={styles.trash} />
                )}
                <div className={styles.content_container}>
                    <div >
                        <h5 onClick={() => setShowFullScreenFood(true)}>{food.foodName}</h5>
                        <div className={styles.inner_content_container}>
                            <p onClick={() => setShowFullScreenFood(true)}>{food.description}</p>

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
                    </div>
                    <div className={styles.bottom}>
                        <Stars score={food.score} />
                        {showState === 1 && (
                            <Buttons
                                bgColor={"var(--green-primary)"}
                                text={isSM ? "افزودن به سبد خرید" : "افزودن"}
                                color={"var(--neutral-white)"}
                                hoverBg={"var(--green-green-shade-10)"}
                                width={isSM ? "244px" : "100px"}
                                thin={true}
                                onClick={() => {
                                    setShowCartNotif(true)
                                    saveFoodsToLocalStorage(food)
                                }}
                            />
                        )}
                    </div>
                </div>
                {showState === 2 && (
                    <div className={styles.count}>
                        <GoPlus style={{ cursor: "pointer" }} />
                        <span>0</span>
                        <FiMinus style={{ cursor: "pointer" }} />
                    </div>
                )}
            </div>
            {showFullScreenFood && (
                <FoodShowScreen food={food} setShowFullScreenFood={setShowFullScreenFood} />
            )}
        </>
    )
})

export default FoodCart