import React from 'react'
import styles from "./styles.module.css"

const TitleMenuPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content_container}>
                <span>غذای اصلی</span>
                <span>پیش غذا</span>
                <span>دسر</span>
                <span>نوشیدنی</span>
            </div>
        </div>
    )
}

export default TitleMenuPage