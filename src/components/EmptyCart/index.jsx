import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./styles.module.css"

const EmptyCart = () => {
    return (
        <div className={styles.center_container}>
            <div className={styles.empty_container}>
                <span className={styles.text}>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</span>
                <Link to={"/menu"} state={1} className={styles.link_to_menu}>منوی رستوران</Link>
            </div>
        </div>
    )
}

export default EmptyCart