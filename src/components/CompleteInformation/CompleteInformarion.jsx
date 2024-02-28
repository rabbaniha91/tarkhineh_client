import React from 'react'
import styles from "./styles.module.css"
import DeliveryMethods from './DeliveryMethods'
import Address from './Address'
import { BsClipboard } from "react-icons/bs";

const CompleteInformarion = () => {
    return (
        <div className={styles.container}>
            <DeliveryMethods />
            <Address />
            <div className={styles.explain_container}>
                <span className={styles.explain_title}>
                    <BsClipboard />
                    <span>توضیحات سفارش </span>
                    <span style={{ fontSize: "var(--small-desktop)" }}>(اختیاری)</span>
                </span>
                <textarea className={styles.textarea}/>
            </div>
        </div>
    )
}

export default CompleteInformarion