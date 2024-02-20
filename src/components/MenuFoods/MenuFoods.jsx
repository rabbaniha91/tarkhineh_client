import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import FoodCart from '../useFull/FoodCart';


const MenuFoods = ({ category, foolData }) => {

    useEffect(() => {
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.category}>
                {category?.map((item, index) => (
                    <a href={`#${item}`} key={item}>
                        {item}
                        <IoIosArrowBack size={20} color='var(--neutral-717171)' />
                    </a>
                ))}
            </div>
            <div className={""}>
                {category?.map(item => (
                    <>
                        <h5 id={`${item}`} className={styles.title}>{item}</h5>
                        <div className={styles.food_container}>
                            {foolData.map(food => {
                                if (food.subCategory === item) {
                                    return <FoodCart food={food} key={food.foodName} />
                                }
                            })}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MenuFoods