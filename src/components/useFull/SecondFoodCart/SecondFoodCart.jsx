import React from 'react'
import styles from "./styles.module.css"
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Buttons from '../Buttons/Buttons';

const SecondFoodCart = ({ food }) => {
    return (
        <div className={styles.container}>
            <img src={food?.cover} alt={food?.foodName} />
            <h5>{food?.foodName}</h5>
            <div className={styles.content}>
                <div>
                    <span style={{ fontSize: "12px", color: "var(--neutral-adadad)" }}>
                        <CiHeart size={24} />
                        افزودن به علاقه مندی ها
                    </span>
                    <span>
                        <FaStar />
                        {parseInt(food?.score).toLocaleString("fa")}
                    </span>
                </div>
                <div>
                    {food?.offer > 0 && (
                        <span style={{alignSelf:"flex-end"}}>
                            <span className={styles.main_price}>{parseInt(food?.price).toLocaleString("fa")}</span>
                            <span className={styles.offer}>%{food?.offer.toLocaleString("fa")}</span>
                        </span>
                    )}
                    <span className={styles.price}>{food?.offer > 0
                        ? (food?.price * (100 - food?.offer) / 100).toLocaleString("fa")
                        : parseInt(food?.price).toLocaleString("fa")} تومان</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <Buttons
                    text={"افزودن به سبد خرید"}
                    thin
                    bgColor={"var(--green-primary)"}
                    hoverBg={"var(--green-green-shade-10)"}
                    color={"var(--neutral-white)"}
                    exteraRadius={false}
                    width={"100%"}
                />
            </div>

        </div>
    )
}

export default SecondFoodCart