import React, { useEffect, useState } from 'react'
import { GoTrash } from "react-icons/go"
import styles from "./styles.module.css"
import { Divider } from 'antd'
import { LuAlertOctagon } from "react-icons/lu";
import { calculateOffers, calculateTotalPrice } from "../../utils"
import Buttons from "../useFull/Buttons/Buttons"
import { CiUser } from "react-icons/ci";
import DeleteFood from '../useFull/DeleteFood';
import Login from '../Login/Login';
import { useContentProvider } from '../../Context/provider';
import useScreenSize from '../../hooks/useScreenSize';






const CheckOutBox = ({ foods, setCartItems }) => {
    const { isSM } = useScreenSize()

    const [offers, setOffers] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const { isLogin, setIsLogin, showLogin, setShowLogin } = useContentProvider()

    useEffect(() => {
        if (foods) {
            setOffers(calculateOffers(foods))
            setTotalPrice(calculateTotalPrice(foods))
        }
    }, [foods])

    return (
        <div className={`${styles.container} ${!isSM && styles.mobile_container}`}>
            {foods !== null && (
                <>
                    <div className={styles.rows}>
                        <h5 className={styles.title}>سبد خرید ({foods?.length.toLocaleString("fa-IR")})</h5>
                        <GoTrash size={34} className={styles.clear} onClick={() => setShowDeleteModal(true)} />
                    </div>
                    <Divider />
                    <div className={styles.rows}>
                        <p>تخفیف محصولات</p>
                        <span>{offers.toLocaleString("fa-ir")} تومان</span>
                    </div>
                    <Divider />
                    <div className={styles.post}>
                        <div className={styles.rows}>
                            <p>هزینه ارسال</p>
                            <span>{parseInt("0").toLocaleString("fa")} تومان</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <LuAlertOctagon color='var(--state-warning-warning)' size={32} />
                            <p style={{ fontSize: "var(--small-desktop)", color: "var(--state-warning-warning)" }}>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.rows} style={{ marginBottom: "24px" }}>
                        <p>مبلغ قابل پرداخت</p>
                        <p>{totalPrice.toLocaleString("fa")}</p>
                    </div>
                    <Buttons
                        width={"100%"}
                        text={isLogin ? "تکمیل اطلاعات" : "ورود / ثبت نام"}
                        icon={!isLogin ? <CiUser size={34} /> : ""}
                        bgColor={"var(--green-primary)"}
                        color={"var(--neutral-white)"}
                        hoverBg={"var(--green-green-shade-10)"}
                        thin
                        exteraRadius={false}
                        onClick={() => {
                            if (!isLogin) setShowLogin(true)
                        }}
                    />
                </>
            )}
            {showDeleteModal && (
                <DeleteFood oneFood={false} setShowDeleteModal={setShowDeleteModal} setCartItems={setCartItems} />
            )}

            {showLogin && (
                <Login setShow={setShowLogin} />
            )}
        </div>
    )
}

export default CheckOutBox