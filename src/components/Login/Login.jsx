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
import ConfirmCode from '../ConfirmCode';
import { useContentProvider } from '../../Context/provider';
import NotValidCode from '../NotValidCode';
import { setLoginUser } from '../../utils';



const phoneRegex = /^09\d{9}/

const Login = ({ setShow }) => {
    const [confirmState, setConfirmState] = useState(false)
    const [persianMobileNumber, setPersianMobileNumber] = useState("")
    const [confirmInputCode, setConfirmInputCode] = useState([])
    const [sendCode, setSendCode] = useState(false)
    const [notValidCode, setNotValidCode] = useState(false)

    const { confirmCode, setConfirmCode, setIsLogin, setShowLogin } = useContentProvider()


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
                setSendCode(true)
            } else {
                const match = confirmInputCode.join("").match(confirmCode.join(""))
                if (match === null) {
                    setNotValidCode(true)
                    setTimeout(() => {
                        setNotValidCode(false)
                    }, 3000)
                } else {
                    setLoginUser()
                    setIsLogin(true)
                    setShowLogin(false)
                }

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
                                type="text"
                                borderColor="var(--neutral-black)"
                                outlined={true}
                                bgColor="var(--neutral-white)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={persianMobileNumber}
                                error={formik.errors.mobileNumber}
                            />
                            {formik.dirty && formik.errors.mobileNumber && (
                                <Error value={formik.errors.mobileNumber} />
                            )}
                        </>
                    ) : (
                        <>
                            <GetCodeInputs setConfirmCode={setConfirmInputCode} error={false} />

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
                        disabled={!confirmState ? !formik.dirty || formik.errors.mobileNumber : confirmInputCode.length < 5}
                        type={"submit"}
                    />
                </form>
                {notValidCode && (
                    <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
                        <NotValidCode setNotValidCode={setNotValidCode} />
                    </div>
                )}
            </div>
            {sendCode && (
                <ConfirmCode setSendCode={setSendCode} />
            )}
        </div>
    )
}

export default Login