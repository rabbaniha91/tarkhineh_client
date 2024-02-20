import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import FoodCart from '../useFull/FoodCart';


const MenuFoods = ({ category, foolData }) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.category}>
                {category?.map((item, index) => (
                    <a href={`#${index}`} key={item}>
                        {item}
                        <IoIosArrowBack size={20} color='var(--neutral-717171)' />
                    </a>
                ))}
            </div>
            <div className={styles.food_container}>
                <FoodCart food={foolData[0]} />
                <FoodCart food={foolData[1]} />
            </div>
        </div>
    )
}

export default MenuFoods