import React from 'react'
import { IoIosClose } from "react-icons/io";
import TextInput from "../useFull/TextInput/TextInput"
import Buttons from "../useFull/Buttons/Buttons"
import * as Yup from "yup"
import { useFormik } from "formik"

import styles from "./styles.module.css"
const phoneRegex = /^09\d{9}/
const Login = ({ setShow }) => {
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
    return (
        <div className={styles.container}>
            <IoIosClose
                size={34}
                className={styles.close}
                onClick={() => setShow(false)}
            />
            <img src="/logos/Logo.png" alt="" />
            <p className={styles.title}>ورود / ثبت نام</p>
            <p className={styles.text}>با وارد کردن شماره موبایل شماره تائیدی برای شما ارسال خواهد شد.</p>
            <form className={styles.input} onSubmit={formik.handleSubmit}>
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
                <Buttons
                    text={"ادامه"}
                    width={"100%"}
                    bgColor="var(--green-primary)"
                    color="var(--neutral-white)"
                    hoverBg="var(--green-green-shade-10)"
                    exteraRadius={false}
                    disabled={!formik.dirty || formik.errors.mobileNumber}
                    type={"submit"}
                />
            </form>
        </div>
    )
}

export default Login