import React, { useState } from 'react';
import styles from "./styles.module.css"
import { BsInfoSquare } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCheckSquare } from "react-icons/fa";


const Stepper = () => {
    const [shoppingState, setShoppingState] = useState(1)

    return (
        <div className={styles.container}>

            <span className={`${styles.steps_sign} ${shoppingState >= 1 && styles.active_state}`}>
                <IoCartOutline className={`${styles.icons} ${shoppingState >= 1 && styles.active_state}`} />
            </span>
            <span className={`${styles.text} ${shoppingState >= 1 && styles.active_state}`}>سبد خرید</span>
            <div className={styles.solid_line}></div>
            <span className={`${styles.steps_sign} ${shoppingState >= 2 && styles.active_state}`}>
                <BsInfoSquare className={`${styles.icons} ${shoppingState >= 2 && styles.active_state}`} />
            </span>
            <span className={`${styles.text} ${shoppingState >= 2 && styles.active_state}`}>تکمیل اطلاعات</span>
            <div className={styles.solid_line}></div>
            <span className={`${styles.steps_sign} ${shoppingState === 3 && styles.active_state}`}>
                <MdPayment className={`${styles.icons} ${shoppingState === 3 && styles.active_state}`} />
            </span>
            <span className={`${styles.text} ${shoppingState === 3 && styles.active_state}`}>پرداخت</span>

        </div>
    )
};
export default Stepper;