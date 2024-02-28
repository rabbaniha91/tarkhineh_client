import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import TextInput from '../useFull/TextInput/TextInput'
import { IoClose } from 'react-icons/io5'
import Buttons from '../useFull/Buttons/Buttons'

const EnterAddress = ({ setEnterAddress }) => {
    const [changeTransferee, setChangeTransferee] = useState(false)

    return (
        <div className={styles.before}>
            <div className={styles.enter_address_container}>
                <div className={styles.enter_address_title}>
                    <h4>ثبت آدرس</h4>
                    <IoClose
                        className={styles.close}
                        size={34}
                        onClick={() => setEnterAddress(false)}
                    />
                </div>
                <div className={styles.address_content_container}>
                    <TextInput
                        placeholder="عنوان آدرس"
                        width="100%"
                        name="address_title"
                        type="text"
                        outlined={true}
                        bgColor="var(--neutral-white)"
                        borderColor="var(--neutral-cbcbcb)"
                        shadow={true}
                        shadowColor="var(--neutral-cbcbcb)"
                    />

                    <div className={styles.transferee}>
                        <input type="checkbox" name="transferee" id="transferee" checked={!changeTransferee} onChange={(e) => {
                            setChangeTransferee(!e.target.checked)
                        }} />
                        <label htmlFor="transferee">تحویل گیرنده خودم هستم.</label>
                    </div>
                    {!changeTransferee ? (
                        <TextInput
                            placeholder="شماره همراه"
                            width="100%"
                            name="mobileNumber"
                            type="text"
                            outlined={true}
                            bgColor="var(--neutral-white)"
                            borderColor="var(--neutral-cbcbcb)"
                            shadow={true}
                            shadowColor="var(--neutral-cbcbcb)"
                        />
                    ) :
                        <>
                            <TextInput
                                placeholder="نام و نام خانوادگی تحویل گیرنده"
                                width="100%"
                                name="transferee_fullName"
                                type="text"
                                outlined={true}
                                bgColor="var(--neutral-white)"
                                borderColor="var(--neutral-cbcbcb)"
                                shadow={true}
                                shadowColor="var(--neutral-cbcbcb)"
                            />
                            <TextInput
                                placeholder="شماره همراه تحویل گیرنده"
                                width="100%"
                                name="transferee_mobile_number"
                                type="text"
                                outlined={true}
                                bgColor="var(--neutral-white)"
                                borderColor="var(--neutral-cbcbcb)"
                                shadow={true}
                                shadowColor="var(--neutral-cbcbcb)"
                            />
                        </>
                    }
                    <div className={styles.explain_container}>
                        <span className={styles.explain_title}>
                            <span>توضیحات سفارش </span>
                            <span style={{ fontSize: "var(--small-desktop)" }}>(اختیاری)</span>
                        </span>
                        <textarea className={styles.textarea} />
                    </div>
                    <div className={styles.buttons}>

                        <Buttons
                            text={"بازگشت"}
                            bgColor={"var(--neutral-white)"}
                            color={"var(--green-primary)"}
                            exteraRadius={false}
                            thin
                            width={"50%"}
                            border={true}
                            borderColor={"var(--green-primary)"}
                        />
                        <Buttons
                            text={"ثبت آدرس"}
                            bgColor={"var(--green-primary)"}
                            color={"var(--neutral-white)"}
                            hoverBg={"var(--green-green-shade-10)"}
                            exteraRadius={false}
                            thin
                            width={"50%"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterAddress