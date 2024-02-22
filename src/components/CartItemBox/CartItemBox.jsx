import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { getCartItems } from "../../utils"
import FoodCart from "../useFull/FoodCart"
import { Link } from 'react-router-dom'

const CartItemBox = () => {
    const [cartItems, setCartItems] = useState(null)
    useEffect(() => {
        setCartItems(getCartItems())
    }, [])


    return (
        <div
            className={`
        ${styles.container} 
        ${cartItems === null && styles.center_container}
        `}>
            {cartItems === null ? (
                <div className={styles.empty_container}>
                    <span className={styles.text}>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</span>
                    <Link to={"/menu"} state={1} className={styles.link_to_menu}>منوی رستوران</Link>
                </div>
            ) : (
                <div className={styles.food_container}>
                    {cartItems?.length > 0 && cartItems?.map(food => (
                        <FoodCart food={food} key={food.foodName} state={2} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CartItemBox