import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { getCartItems } from "../../utils"
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
        ${cartItems === null && styles.empty_container}
        `}>
            {cartItems === null ? (
                <>
                    <span className={styles.text}>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</span>
                    <Link to={"/menu"} className={styles.link_to_menu}>منوی رستوران</Link>
                </>
            ) : ""}
        </div>
    )
}

export default CartItemBox