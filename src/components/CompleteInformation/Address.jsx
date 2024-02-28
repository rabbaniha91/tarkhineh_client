import React, { useState } from 'react'
import styles from "./styles.module.css"
import { Divider } from 'antd'
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";


const Address = React.memo(() => {
    const [address, setAddress] = useState(null)
    return (
        <div className={styles.address_container}>
            <div className={styles.title}>
                <span>
                    <IoLocationOutline size={28} />
                    آدرس ها
                </span>
                <span className={styles.add_address}>
                    <MdMyLocation size={28} />
                    افزودن آدرس
                </span>
            </div>
            <Divider />
        <div className={`${address === null ? styles.no_address : styles.address}`}>
                {address === null ?  (
                    <span>شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</span>
                ): ""}
            </div>
        </div>
    )
})

export default Address