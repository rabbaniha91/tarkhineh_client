import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import TextInput from "../useFull/TextInput/TextInput"
import Buttons from "../useFull/Buttons/Buttons"
import * as Yup from "yup"
import { useFormik } from "formik"

import styles from "./styles.module.css"
import GetCodeInputs from './GetCodeInputs';
import Error from '../useFull/Error/Error';
import Timer from '../useFull/Timer/Timer';
const phoneRegex = /^09\d{9}/


const Login = ({ setShow }) => {
    const [confirmState, setConfirmState] = useState(false)
    const [confirmCode, setConfirmCode] = useState([])
    const [persianMobileNumber, setPersianMobileNumber] = useState("")

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
            if (!confirmState) {
                setConfirmState(true)
            } else {
                console.log("send")
            }
        }
    })

    useEffect(() => {
        let persianNum = formik.values.mobileNumber
            .split("")
            .map(char => {
                return parseInt(char).toLocaleString("fa-IR")
            })
            .join("")

        setPersianMobileNumber(persianNum)

    }, [formik.values.mobileNumber])


    return (
        <div className={styles.before}>
            <div className={styles.container}>
                <IoIosClose
                    size={34}
                    className={styles.close}
                    onClick={() => setShow(false)}
                />
                <img className={styles.logo} src="/logos/Vector.png" alt="" />
                <p className={styles.title}>ورود / ثبت نام</p>
                <p className={styles.text}>{!confirmState
                    ? ("با وارد کردن شماره موبایل شماره کد تائیدی برای شما ارسال خواهد شد.")
                    : (`کد تائید پنج رقمی به شماره ${persianMobileNumber !== "" && persianMobileNumber} ارسال شد.`)}</p>
                <form className={styles.input} onSubmit={formik.handleSubmit}>
                    {!confirmState ? (
                        <>
                            <TextInput
                                autoFocus={true}
                                dir="ltr"
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
                            {formik.dirty && formik.errors.mobileNumber && (
                                <Error value={formik.errors.mobileNumber} />
                            )}
                        </>
                    ) : (
                        <>
                            <GetCodeInputs setConfirmCode={setConfirmCode} error={false} />

                            <Timer />

                        </>
                    )}
                    <Buttons
                        text={!confirmState ? "ادامه" : "تائید"}
                        width={"100%"}
                        bgColor="var(--green-primary)"
                        color="var(--neutral-white)"
                        hoverBg="var(--green-green-shade-10)"
                        exteraRadius={false}
                        disabled={!confirmState ? !formik.dirty || formik.errors.mobileNumber : confirmCode.length < 5}
                        type={"submit"}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login