import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./menuItem.module.css"

const MenuItem = React.memo(({ picture, title }) => {
        return (
            <Link
                to={`/foods/${title}`}
                className={styles.container}
            >
                <img src={picture} alt={picture} />
                <p>{title}</p>
            </Link>
        )
    }
)

export default MenuItem