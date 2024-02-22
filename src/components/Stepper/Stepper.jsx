import React from 'react';
import styles from "./styles.module.css"
import { BsInfoSquare } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Stepper = () => (
    <div className={styles.container}>

        <span className={styles.steps_sign}>
            <IoCartOutline className={styles.icons} />
        </span>
        <span className={styles.text}>سبد خرید</span>
        <div className={styles.solid_line}></div>
        <span className={styles.steps_sign}>
            <BsInfoSquare className={styles.icons} />
        </span>
        <span className={styles.text}>تکمیل اطلاعات</span>
        <div className={styles.solid_line}></div>
        <span className={styles.steps_sign}>
            <MdPayment className={styles.icons} />
        </span>
        <span className={styles.text}>پرداخت</span>

    </div>
);
export default Stepper;