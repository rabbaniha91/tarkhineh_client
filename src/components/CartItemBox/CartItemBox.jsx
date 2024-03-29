import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { decreaseFoodCount, getCartItems, increaseFoodCounts } from "../../utils"
import FoodCart from "../useFull/FoodCart"
import { Link } from 'react-router-dom'
import useScreenSize from '../../hooks/useScreenSize'
import { GoPlus, GoTrash } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'
import DeleteFood from '../useFull/DeleteFood'
import CheckOutBox from '../CheckOutBox'

const CartItemBox = ({ cartItems, setCartItems }) => {
    const { isSM } = useScreenSize()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [index, setIndex] = useState(null)



    return (
        <>
            {!isSM ? (

                <div className={styles.mobile_container}>
                    {cartItems?.length > 0 && cartItems?.map((food, i) => (
                        <div key={food.foodName} className={styles.mobile_item_container}>

                            <div style={{ lineHeight: "2" }}>

                                <h4>{food.foodName}</h4>
                                <p>{food.offer === 0
                                    ? parseInt(food.price).toLocaleString("fa-IR")
                                    : parseInt(food.price * ((100 - food.offer) / 100)).toLocaleString("fa-IR")} تومان</p>
                            </div>
                            <div className={styles.count}>
                                <GoPlus
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        increaseFoodCounts(food.foodName)
                                        const newCartItems = getCartItems()
                                        setCartItems(newCartItems)
                                    }}
                                />
                                <span>{food.count.toLocaleString("fa-IR")}</span>
                                {food.count > 1 ? (
                                    <FiMinus
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            decreaseFoodCount(food.foodName)
                                            const newCartItems = getCartItems()
                                            setCartItems(newCartItems)
                                        }}
                                    />
                                ) : (
                                    <GoTrash
                                        size={18}
                                        className={styles.trash}
                                        onClick={() => {
                                            setShowDeleteModal(true)
                                            setIndex(i)
                                        }}
                                    />
                                )}

                            </div>

                        </div>

                    ))}
                    {showDeleteModal && (
                        <DeleteFood
                            foodName={cartItems[index]?.foodName}
                            setShowDeleteModal={setShowDeleteModal}
                            oneFood={true}
                            setCartItems={setCartItems}
                        />
                    )}

                </div>


            ) : (
                <div className={styles.food_container}>
                    {cartItems?.length > 0 && cartItems?.map(food => (
                        <FoodCart food={food} key={food.foodName} state={2} setCartItems={setCartItems} />
                    ))}
                </div>
            )}

        </>

    )
}

export default CartItemBox