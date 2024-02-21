import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import FoodCart from '../useFull/FoodCart';
import TextInput from "../useFull/TextInput/TextInput"
import { CiSearch } from "react-icons/ci"
import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

const handleSearch = (value, array) => {
    const findFoodName = []
    array.filter(food => {
        if (food.foodName.includes(value)) {
            findFoodName.push(food.foodName)
        }

    })

    return findFoodName
}

const MenuFoods = ({ category, foolData }) => {
    const { isXMD } = useScreenSize()
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [searchResult, setSearchResult] = useState(null)
    useEffect(() => {
    }, [])



    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <div className={styles.category_items}>
                    {category?.map((item, index) => (
                        <a href={`#${item}`} key={item}>
                            {item}
                            <IoIosArrowBack size={20} color='var(--neutral-717171)' />
                        </a>
                    ))}

                </div>
                <div className={styles.search_box}>
                    <TextInput
                        placeholder="جستجو"
                        width={isXMD ? "90%" : "100%"}
                        name="جستجو"
                        type="text"
                        borderColor="var(--neutral-black)"
                        outlined={true}
                        bgColor="var(--neutral-white)"
                        icon={<CiSearch size={34} />}
                        onChange={(e) => {
                            e.target.value !== "" ? setShowSearchBox(true) : setShowSearchBox(false)
                            setSearchResult(handleSearch(e.target.value, foolData))
                        }}
                    />
                    {showSearchBox && (
                        <ul className={styles.search_result}>
                            {searchResult !== null && searchResult.map(item => (


                                <>
                                    <li className={styles.search_items}>
                                        <a href=''>{item}</a>
                                    </li>
                                    <Divider style={{margin: "0", padding: "0"}}/>
                                </>

                            ))}
                        </ul>
                    )}
                </div>
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