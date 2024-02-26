import React from 'react'
import styles from "./styles.module.css"
import { IoIosClose } from 'react-icons/io'
import Buttons from '../Buttons/Buttons'
import { deleteFoodFromCart, getCartItems } from "../../../utils"

const DeleteFood = ({ foodName, setShowDeleteModal, oneFood, setCartItems }) => {
    return (
        <div className={styles.before}>
            <div className={styles.container}>
                <div className={styles.title}>{oneFood ? "حذف محصول" : "حذف محصولات"}</div>
                <IoIosClose size={40} className={styles.close} onClick={() => setShowDeleteModal(false)} />
                <p className={styles.text}>{oneFood
                    ? `آیا می خواهید ${foodName} را از سبد خرید خود حذف کنید؟`
                    : "همه محصولات از سبد خرید شما حذف شود؟"}</p>

                <div className={styles.buttons}>
                    <Buttons
                        text={"بازگشت"}
                        bgColor={"transparent"}
                        color={"var(--green-primary)"}
                        border={true}
                        borderColor={"var(--green-primary)"}
                        width={"117px"}
                        exteraRadius={false}
                        thin
                        onClick={() => setShowDeleteModal(false)}
                    />
                    <Buttons
                        text={"حذف"}
                        bgColor={"var(--state-error-error-extralight)"}
                        color={"var(--state-error-error)"}
                        width={"117px"}
                        exteraRadius={false}
                        thin
                        onClick={() => {
                            deleteFoodFromCart(foodName)
                            setShowDeleteModal(false)
                            const newCartItems = getCartItems()
                            setCartItems(newCartItems)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DeleteFood