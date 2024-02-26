import React, { useEffect } from 'react'
import styles from "./styles.module.css"

const CheckOutBox = ({ foods }) => {

    return (
        <div className={styles.container}>
            {foods !== null && (
                <div>
                    <h5>سبد خرید ({foods?.length.toLocaleString("fa-IR")})</h5>
                </div>
            )}
        </div>
    )
}

export default CheckOutBox