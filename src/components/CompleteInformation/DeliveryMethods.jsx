import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi2";
import { IoBasketOutline } from "react-icons/io5";

import styles from "./styles.module.css"

const DeliveryMethods = React.memo(({ method, setMethod }) => {
    return (
        <div className={styles.delivery_method}>
            <div className={styles.title}>
                <TbTruckDelivery size={34} />
                <h4>روش تحویل سفارش</h4>
            </div>
            <div className={styles.methods}>
                <input type="radio" name="delivery" id="delivery" />
                <label style={{ display: "flex" }} htmlFor="delivery">
                    <div>
                        <h5>ارسال توسط پیک</h5>
                        <span>توسط پیک رستوران ارسال شود.</span>
                    </div>
                    <HiOutlineTruck size={28} />
                </label>
            </div>
            <div className={styles.methods}>
                <input type="radio" name="delivery" id="in_person" />
                <label style={{ display: "flex" }} htmlFor="in_person">
                    <div>
                        <h5>تحویل حضوری</h5>
                        <span>توسط پیک رستوران ارسال شود.</span>
                    </div>
                    <IoBasketOutline size={28} />
                </label>
            </div>
        </div>
    )
})

export default DeliveryMethods