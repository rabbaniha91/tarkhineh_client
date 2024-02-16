import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import styles from "./styles.module.css"
import { TbBrandTelegram } from "react-icons/tb";
import { PiInstagramLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';
import TextInput from '../useFull/TextInput/TextInput';
import Buttons from "../useFull/Buttons"


const Footer = () => {
  const persianWordRegex = /[پچجحخهعغفقثصضشسیبلاتنموئدذرزطظ]+/
  const mobileRegex = /^09\d{9}$/
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("لطفا نام و نام خانوادگی خود را وارد نمائید.")
      .matches(persianWordRegex, "لطفا صفحه کلید را به فارسی تغییر دهید و تنها از حروف استفاده نمائید.")
      .min(7, "نام و نام خانوادگی نمی تواند از 7 حرف کمتر باشد."),
    mobileNumber: Yup.string()
      .required("لطفا شماره همراه خود را وارد نمائید.")
      .matches(mobileRegex, "شماره همراه صحیح نیست."),
    email: Yup.string()
      .email("آدرس ایمیل صحیح نیست.")
  })

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })


  

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.content_container}>
          <div className={styles.right}>
            <div className={styles.right_first_column}>
              <h5>دسترسی آسان</h5>
              <Link className={styles.link}>پرسش های متداول</Link>
              <Link className={styles.link}>قوانین ترخینه</Link>
              <Link className={styles.link}>حریم خصوصی</Link>
              <div>
                <Link className={styles.link}><TbBrandTelegram size={24} /></Link>
                <Link className={styles.link}><PiInstagramLogoThin size={24} /></Link>
                <Link className={styles.link}><CiTwitter size={24} /></Link>
              </div>
            </div>
            <div className={styles.right_second_column}>
              <h5>شعبه های ترخینه</h5>
              <Link className={styles.link}>شعبه اکباتان</Link>
              <Link className={styles.link}>شعبه چالوس</Link>
              <Link className={styles.link}>شعبه اقدسیه</Link>
              <Link className={styles.link}>شعبه ونک</Link>
            </div>
          </div>
          <div className={styles.left}>
            <h5>پیام به ترخینه</h5>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div className={styles.right_inputs}>
                <TextInput
                  placeholder="نام و نام خانوادگی"
                  width="267px"
                  name="fullName"
                  type={"text"}
                  onChange={formik.handleChange}
                  onBlue={formik.handleBlur}
                  value={formik.values.fullName}
                  error={formik.errors.fullName}
                  touch={formik.dirty}
                />

                <TextInput
                  placeholder="شماره تماس"
                  width="267px"
                  name="mobileNumber"
                  type="phone"
                  onChange={formik.handleChange}
                  onBlue={formik.handleBlur}
                  value={formik.values.mobileNumber}
                  error={formik.errors.mobileNumber}
                  touch={formik.dirty}

                />
                <TextInput
                  placeholder="آدرس ایمیل"
                  width="267px"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlue={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.errors.email}
                  touch={formik.dirty}

                />

              </div>
              <div className={styles.left_inputs}>
                <textarea cols={37} rows={7} className={styles.textarea} placeholder='پیام شما' />
                <Buttons
                  text={"ارسال پیام"}
                  bgColor={"transparent"}
                  color={"var(--neutral-white)"}
                  border={true}
                  borderColor={"var(--neutral-white)"}
                  exteraRadius={false}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer