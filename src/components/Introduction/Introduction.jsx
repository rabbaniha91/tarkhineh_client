import React from 'react'
import styles from "./styles.module.css"
import Buttons from '../useFull/Buttons/Buttons'
import { IoIosArrowBack } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiHomeWifiLine } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";

const Introduction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <div className={styles.content_container}>
                    <div className={styles.right}>
                        <h2>رستوران‌های زنجیره‌ای ترخینه</h2>
                        <p>مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
                        <div className={styles.buttons}>
                            <Buttons
                                text={"اطلاعات بیشتر"}
                                bgColor={"transparent"}
                                color={"var(--neutral-white)"}
                                border={true}
                                borderColor={"var(--neutral-white)"}
                                dualIcons={false}
                                icon={<IoIosArrowBack />}
                                exteraRadius={false} />
                        </div>
                    </div>
                    <div className={styles.left}>
                        <div className={styles.left_inner}>
                            <div>
                                <RiUserLine size={40} />
                                <p>پرسنلی مجرب و حرفه ای</p>
                            </div>
                            <div>
                                <AiOutlineLineChart size={40} />
                                <p>کیفیت بالای غذاها</p>
                            </div>
                        </div>
                        <div className={styles.left_inner}>
                            <div>
                                <RiHomeWifiLine size={40} />
                                <p>محیطی دلنشین و آرام</p>
                            </div>
                            <div>
                                <LuClipboardList size={40} />
                                <p>منوی متنوع</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction