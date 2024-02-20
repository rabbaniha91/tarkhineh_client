import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import FoodCart from '../useFull/FoodCart';
import TextInput from "../useFull/TextInput/TextInput"
import { CiSearch } from "react-icons/ci"
import useScreenSize from '../../hooks/useScreenSize';

const MenuFoods = ({ category, foolData }) => {
    const { isXMD } = useScreenSize()
    useEffect(() => {
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <div>
                    {category?.map((item, index) => (
                        <a href={`#${item}`} key={item}>
                            {item}
                            <IoIosArrowBack size={20} color='var(--neutral-717171)' />
                        </a>
                    ))}

                </div>
                <TextInput
                    placeholder="جستجو"
                    width= {isXMD ? "90%" : "50%"}
                    name="جستجو"
                    type="text"
                    borderColor="var(--neutral-black)"
                    outlined={true}
                    bgColor="var(--neutral-white)"
                    icon={<CiSearch size={34} />}
                />
            </div>
            <div className={""}>
                {category?.map(item => (
                    <div key={item}>
                        <h5 id={`${item}`} className={styles.title}>{item}</h5>
                        <div className={styles.food_container}>
                            {foolData.map(food => {
                                if (food.subCategory === item) {
                                    return <FoodCart food={food} key={food.foodName} />
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuFoods