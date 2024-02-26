import React, { useEffect, useState } from 'react'

import Buttons from "../../useFull/Buttons/Buttons"
import styles from "./styles.module.css"
import useScreenSize from '../../../hooks/useScreenSize';
import FoodShowScreen from '../FoodShowScreen';
import Stars from '../Stars';
import { saveFoodsToLocalStorage, increaseFoodCounts, decreaseFoodCount, getCartItems } from "../../../utils"

import { useContentProvider } from '../../../Context/provider';
import { GoTrash } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import DeleteFood from '../DeleteFood';


const FoodCart = React.memo(({ food, state = 1, setCartItems }) => {
    const { isSM } = useScreenSize()
    const [currentFood, setCurrentFood] = useState("")
    const [priceWithOffer, setPriceWithOffer] = useState(null)
    const [showFullScreenFood, setShowFullScreenFood] = useState(false)
    const [showState, setShowState] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const { setShowCartNotif } = useContentProvider()

    useEffect(() => {
        setCurrentFood(food)
        setShowState(state)
    }, [food, setCurrentFood, setShowState])


    useEffect(() => {
        if (currentFood) {
            if (currentFood.offer > 0) {
                const offerPrice = parseInt(currentFood.price) * ((100 - currentFood.offer) / 100)
                setPriceWithOffer(offerPrice)

            }
        }

    }, [currentFood])



    return (
        <><div className={styles.container} style={{ width: showState === 2 && "100%" }}>
            <img
                src={currentFood?.cover} alt="cover"
                onClick={() => setShowFullScreenFood(true)} />
            {showState === 2 && (
                <GoTrash
                    size={20}
                    className={styles.trash}
                    onClick={() => setShowDeleteModal(true)}
                />
            )}
            <div className={styles.content_container}>
                <div >
                    <h5 onClick={() => setShowFullScreenFood(true)}>{currentFood?.foodName}</h5>
                    <div className={styles.inner_content_container}>
                        <p onClick={() => setShowFullScreenFood(true)}>{currentFood?.description}</p>
                        {priceWithOffer !== null ? (
                            <div className={styles.price_container}>
                                <div>
                                    <span className={styles.offer}>{
                                        `%${currentFood?.offer.toLocaleString("fa-IR")}`}
                                    </span>
                                    <span className={styles.old_price}>
                                        {parseInt(currentFood?.price).toLocaleString("fa-IR")}
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
                                {parseInt(currentFood?.price).toLocaleString("fa-IR")}
                                <span>تومان</span>
                            </span>
                        }
                    </div>
                </div>
                <div className={styles.bottom}>
                    <Stars score={currentFood?.score} />
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
                                saveFoodsToLocalStorage(currentFood)
                            }}
                        />
                    )}
                </div>
            </div>
            {showState === 2 && (
                <div className={styles.count}>
                    <GoPlus
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            increaseFoodCounts(currentFood?.foodName)
                            const newCartItems = getCartItems()
                            const currentItem = newCartItems.filter(item => {
                                return item.foodName === currentFood.foodName
                            })
                            setCurrentFood(currentItem[0])
                        }}
                    />
                    <span>{currentFood?.count.toLocaleString("fa-IR")}</span>
                    <FiMinus
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            decreaseFoodCount(currentFood?.foodName)
                            const newCartItems = getCartItems()
                            const currentItem = newCartItems.filter(item => {
                                return item.foodName === currentFood.foodName
                            })
                            setCurrentFood(currentItem[0])
                        }}
                    />
                </div>
            )}
        </div>
            {showFullScreenFood && (
                <FoodShowScreen food={currentFood} setShowFullScreenFood={setShowFullScreenFood} />
            )}
            {showDeleteModal && (
                <DeleteFood
                    foodName={currentFood?.foodName}
                    setShowDeleteModal={setShowDeleteModal}
                    oneFood={true}
                    setCartItems={setCartItems}
                />
            )}
        </>
    )
})

export default FoodCart