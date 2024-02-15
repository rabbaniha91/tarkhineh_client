import React from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";



const BranchesCart = ({ picture, title, address }) => {
    return (
        <div className={styles.container}>
            <img src={picture} alt="" />
            <div>
                <CiImageOn size={50} color='var(--neutral-white)'/>
            </div>
            <h6>{title}</h6>
            <p>{address}</p>
            <button >صفحه شعبه
                <IoIosArrowBack size={24} />
            </button>
        </div>
    )
}

export default BranchesCart