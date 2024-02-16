import React from 'react'
import styles from "./styles.module.css"
import { TbBrandTelegram } from "react-icons/tb";
import { PiInstagramLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Footer = () => {
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
            <h4>پیام به ترخینه</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer