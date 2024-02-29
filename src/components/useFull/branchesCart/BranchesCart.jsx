import React from 'react'
import styles from "./styles.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';



const BranchesCart = ({ picture, title, address }) => {
    return (
        <Link to={`/branches/${title}`} className={styles.container}>
            <img src={picture} alt="" />
            <div>
                <CiImageOn size={50} color='var(--neutral-white)' />
            </div>
            <h6>شعبه {title}</h6>
            <p>{address}</p>
            <button >صفحه شعبه
                <IoIosArrowBack size={24} />
            </button>
        </Link>
    )
}

export default BranchesCart