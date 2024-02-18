import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import TextInput from "../useFull/TextInput/TextInput"
import Buttons from "../useFull/Buttons/Buttons"
import * as Yup from "yup"
import { useFormik } from "formik"

import styles from "./styles.module.css"
import GetCodeInputs from './GetCodeInputs';
const phoneRegex = /^09\d{9}/


const Login = ({ setShow }) => {
    const [changeState, setChangeState] = useState(true)
    const [confirmCode, setConfirmCode] = useState([])

    const valdate = Yup.object({
        mobileNumber: Yup.string()
            .required("ورود شماره همراه الزامی است.")
            .matches(phoneRegex, "شماره همراه معتبر نیست.")
    })

    const formik = useFormik({
        initialValues: {
            mobileNumber: ""
        },
        validationSchema: valdate,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    useEffect(() => {
        console.log(confirmCode)
    }, [confirmCode])
    return (
        <div className={styles.container}>
            <IoIosClose
                size={34}
                className={styles.close}
                onClick={() => setShow(false)}
            />
            <img className={styles.logo} src="/logos/Vector.png" alt="" />
            <p className={styles.title}>ورود / ثبت نام</p>
            <p className={styles.text}>با وارد کردن شماره موبایل شماره تائیدی برای شما ارسال خواهد شد.</p>
            <form className={styles.input} onSubmit={formik.handleSubmit}>
                {!changeState ? (
                    <TextInput
                        placeholder="شماره همراه"
                        width="100%"
                        name="mobileNumber"
                        type="phone"
                        borderColor="var(--neutral-black)"
                        outlined={true}
                        bgColor="var(--neutral-white)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobileNumber}
                        error={formik.errors.mobileNumber}
                    />
                ) : (
                    <GetCodeInputs setConfirmCode={setConfirmCode} />
                )}
                <Buttons
                    text={!changeState ? "ادامه" : "تائید"}
                    width={"100%"}
                    bgColor="var(--green-primary)"
                    color="var(--neutral-white)"
                    hoverBg="var(--green-green-shade-10)"
                    exteraRadius={false}
                    disabled={!changeState ? !formik.dirty || formik.errors.mobileNumber : confirmCode.length < 5}
                    type={"submit"}
                />
            </form>
        </div>
    )
}

export default Login