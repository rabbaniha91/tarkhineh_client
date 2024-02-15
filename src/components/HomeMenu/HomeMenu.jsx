import React from 'react'
import styles from "./styles.module.css"
import MenuItem from '../useFull/MenuItem'

const HomeMenu = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>منوی رستوران</p>
            <div className={styles.menu}>
                <MenuItem picture={"/images/menu/1.png"} title={"غذای اصلی"}/>
                <MenuItem picture={"/images/menu/2.png"} title={"پیش غذا"}/>
                <MenuItem picture={"/images/menu/3.png"} title={"دسر"}/>
                <MenuItem picture={"/images/menu/4.png"} title={"نوشیدنی"}/>
            </div>
        </div>
    )
}

export default HomeMenu