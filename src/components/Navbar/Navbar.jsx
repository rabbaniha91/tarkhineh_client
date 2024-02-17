import React, { useEffect, useState } from 'react'
import useScreenSize from "../../hooks/useScreenSize"
import styles from './styles.module.css'
import { Link, useLocation } from "react-router-dom"
import { Tooltip } from "antd"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";




const Navbar = () => {
  const { isXMD, isSM } = useScreenSize()
  const location = useLocation()
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  return (
    <div className={styles.container}>
      {isXMD && (
        <div>
          <RxHamburgerMenu size={24} color='var(--green-primary)' />
        </div>
      )}
      <img src="/logos/Logo.png" alt="" />
      {!isXMD && (
        <ul className={styles.ul}>

          <Link to={"/"} className={`${styles.link} `}>
            <li className={`${url === "/" ? styles.active : ""}`}>
              صفحه اصلی
            </li>
          </Link>
          <Link to={"/branches"} className={styles.link}>
            <li className={`${url === "/branches" ? styles.active : ""}`}>
              شعبه
              <IoIosArrowDown />
            </li>
          </Link>
          <Link to={"/menu"} className={styles.link}>
            <li className={`${url === "/menu" ? styles.active : ""}`}>
              منو
              <IoIosArrowDown />

            </li>
          </Link>
          <Link to={"/Representation"} className={styles.link}>
            <li className={`${url === "/Representation" ? styles.active : ""}`}>
              اعطای نمایندگی
            </li>
          </Link>
          <Link to={"/about_us"} className={styles.link}>
            <li className={`${url === "/about_us" ? styles.active : ""}`}>
              درباره ما
            </li>
          </Link>
          <Link to={"/contact_us"} className={styles.link}>
            <li className={`${url === "/contact_us" ? styles.active : ""}`}>
              تماس با ما
            </li>
          </Link>
        </ul>
      )}
      <div className={styles.left}>
        {isSM && (
          <Tooltip placement='bottom' title={"جستجو"} color='var(--green-primary)'>
            <div className={styles.icons}>
              <CiSearch size={24} color='var(--green-primary)' />
            </div>
          </Tooltip>
        )}
        <Tooltip placement='bottom' title="سبد خرید" color='var(--green-primary)'>
          <div className={styles.icons}>
            <CiShoppingCart size={24} color='var(--green-primary)' />
          </div>
        </Tooltip>
        <Tooltip placement='bottom' title="ورود / ثبت نام" color='var(--green-primary)'>
          <div className={styles.icons}>
            <CiUser size={24} color='var(--green-primary)' />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Navbar