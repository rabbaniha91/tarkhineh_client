import React, { useState } from 'react'
import styles from "./styles.module.css"
import { Divider } from 'antd'
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import EnterAddress from './EnterAddress';


const Address = React.memo(() => {
    const [enterAddress, setEnterAddress] = useState(false)
    const [address, setAddress] = useState(null)
    return (
        <>
            <div className={styles.address_container}>
                <div className={styles.title}>
                    <span>
                        <IoLocationOutline size={28} />
                        آدرس ها
                    </span>
                    <span
                        onClick={() => setEnterAddress(true)}
                        className={styles.add_address}>
                        <MdMyLocation size={28} />
                        افزودن آدرس
                    </span>
                </div>
                <Divider />
                <div className={`${address === null ? styles.no_address : styles.address}`}>
                    {address === null ? (
                        <span>شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</span>
                    ) : ""}
                </div>
            </div>
            {enterAddress && (
                <EnterAddress setEnterAddress={setEnterAddress}/>
            )}
        </>
    )
})

export default Address