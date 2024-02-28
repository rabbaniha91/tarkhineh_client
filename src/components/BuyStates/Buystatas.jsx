import React, { useEffect, useState } from 'react'
import Stepper from '../Stepper/Stepper'
import EmptyCart from "../EmptyCart"
import { getCartItems } from '../../utils'
import useScreenSize from '../../hooks/useScreenSize'
import CartItemBox from '../CartItemBox'
import CheckOutBox from '../CheckOutBox'

import styles from "./styles.module.css"
import CompleteInformarion from '../CompleteInformation'

const Buystatas = () => {
    const { isSM } = useScreenSize()

    const [cartItems, setCartItems] = useState(null)
    const [shoppingState, setShoppingState] = useState(1)


    useEffect(() => {
        setCartItems(getCartItems())
    }, [getCartItems])

    return (
        <>
            <Stepper shoppingState={shoppingState} />
            {cartItems === null ? (
                <EmptyCart />
            ) : (
                <div className={`${styles.full_cart} ${!isSM && styles.full_cart_mobile}`}>
                    {shoppingState === 1 && (
                        <>
                            <CartItemBox cartItems={cartItems} setCartItems={setCartItems} />
                            <CheckOutBox
                                foods={cartItems}
                                setCartItems={setCartItems}
                                shoppingState={shoppingState}
                                setShoppingState={setShoppingState}
                            />
                        </>
                    )}

                    {shoppingState === 2 && (
                        <>
                            <CompleteInformarion />
                            <CheckOutBox
                                foods={cartItems}
                                setCartItems={setCartItems}
                                shoppingState={shoppingState}
                                setShoppingState={setShoppingState}
                            />
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Buystatas