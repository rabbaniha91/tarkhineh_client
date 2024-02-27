import React, { useEffect } from 'react'
import { useContentProvider } from '../../Context/provider'
import styles from "./styles.module.css"
import { IoClose } from 'react-icons/io5'

const ConfirmCode = ({ setSendCode }) => {
    const { confirmCode, setConfirmCode } = useContentProvider()

    useEffect(() => {
        setConfirmCode([])
        for (let i = 0; i < 5; i++) {
            setConfirmCode((prev) => {
                return [...prev, Math.floor(Math.random() * 10)]
            })
        }
    }, [])

    useEffect(() => {
        console.log(confirmCode)
    }, [confirmCode])
    return (
        <div
            className={styles.container}
        >
            <IoClose className={styles.close} size={24} onClick={() => setSendCode(false)} />
            <h3>کد تائید</h3>
            <div dir='ltr'>
                {confirmCode?.length > 0 && confirmCode.map((number, index) => (
                    <span key={index}>{number}</span>
                ))}
            </div>

        </div>
    )
}

export default ConfirmCode