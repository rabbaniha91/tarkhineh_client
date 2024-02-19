import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./menuItem.module.css"

const MenuItem = React.memo(({ picture, title, state }) => {
    return (
        <Link
            to={`/menu`}
            className={styles.container}
            state={state}
        >
            <img src={picture} alt={picture} />
            <p>{title}</p>
        </Link>
    )
}
)

export default MenuItem