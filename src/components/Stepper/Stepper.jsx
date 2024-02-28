import React, { useState } from 'react';
import styles from "./styles.module.css"
import { BsInfoSquare } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import useScreenSize from '../../hooks/useScreenSize';
import { IoIosArrowForward } from "react-icons/io";
import { GoTrash } from "react-icons/go";


const Stepper = ({shoppingState}) => {
    const { isSM } = useScreenSize()

    return (
        <div className={`${styles.container} ${!isSM && styles.mobile_container}`}>

            {isSM ? (
                <>
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
                </>
            ) : (
                <>
                    <IoIosArrowForward size={30} />
                    <span
                        style={{
                            fontWeight: "bolder",
                            fontSize: "var(--h5-mobile)"
                        }}>
                        {shoppingState === 1 ? "سبد خرید" : ""}
                    </span>
                    <GoTrash size={30} />
                </>
            )}

        </div>
    )
};
export default Stepper;