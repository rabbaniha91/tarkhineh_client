import React from 'react'
import styles from "./styles.module.css"
import { IoIosClose } from "react-icons/io";
import Stars from '../Stars';


const FoodShowScreen = ({ food, setShowFullScreenFood }) => {
  return (
    <div className={styles.before}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>اطلاعات محصول</h4>
          <IoIosClose className={styles.close} size={44} onClick={(event) => {
            event.stopPropagation();
            setShowFullScreenFood(false);
          }} />
        </div>
        <div className={styles.image_container}>
          <img src={food.cover} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.description}>
            <h3>{food.foodName}</h3>
            <span style={{fontSize: "var(--small-desktop)", color: "var(--neutral-757575)"}}>{food.description}</span>
          </div>
          <Stars score={food.score} />
        </div>
      </div>
    </div>
  )
}

export default FoodShowScreen