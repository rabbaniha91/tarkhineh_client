import React, { useEffect, useState } from 'react'
import useScreenSize from "../../hooks/useScreenSize"
import styles from './styles.module.css'
import { Link, useLocation } from "react-router-dom"
import { Tooltip } from "antd"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dropdown, Space, Button } from "antd"
import { branchesitem, menuItem, UserMneu } from "../../data/data.jsx"
import Login from '../Login/Login.jsx'
import CustomDrawer from '../useFull/Drawer/CustomDrawer.jsx'
import { checkCartItems } from '../../utils.js'
import { useContentProvider } from '../../Context/provider.jsx'




const Navbar = () => {
  const { isXMD, isSM } = useScreenSize()
  const location = useLocation()
  const [url, setUrl] = useState("")
  const [isScroll, setIsScroll] = useState(false)
  const [open, setOpen] = useState(false)

  const { showCartNotif, setShowCartNotif, isLogin, setIsLogin, showLogin, setShowLogin } = useContentProvider()

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [document.documentElement.scrollTop])


  useEffect(() => {
    setShowCartNotif(checkCartItems())
  }, [])

  return (
    <div className={`${styles.container} ${isScroll && styles.scrolled_navbar}`}>
      {isXMD && (
        <>
          <div onClick={() => setOpen(true)}>
            <RxHamburgerMenu size={24} color='var(--green-primary)' />
          </div>
          <CustomDrawer
            open={open}
            placement={"right"}
            title={<img
              style={{
                width: "100%",
                height: "110px",
                objectFit: "cover"
              }}
              src='./images/footer/3.jpg' />}
            setOpen={setOpen}
          />


        </>
      )}
      <img src="/logos/Logo.png" alt="" />
      {!isXMD && (
        <ul className={styles.ul}>

          <Link to={"/"} className={`${styles.link} `}>
            <li className={`${styles.li} ${url === "/" ? styles.active : ""}`}>
              صفحه اصلی
            </li>
          </Link>

          <Dropdown
            menu={{
              items: branchesitem,
            }}
          >
            <li className={`${styles.li}`}>
              <Space>
                شعبه
                <IoIosArrowDown />
              </Space>
            </li>
          </Dropdown>

          <Dropdown
            menu={{
              items: menuItem,
            }}
          >
            <li className={`${styles.li} ${url === "/menu" ? styles.active : ""}`}>
              <Space>
                منو
                <IoIosArrowDown />
              </Space>
            </li>
          </Dropdown>
          <Link to={"/Representation"} className={styles.link}>
            <li className={`${styles.li} ${url === "/Representation" ? styles.active : ""}`}>
              اعطای نمایندگی
            </li>
          </Link>
          <Link to={"/about_us"} className={styles.link}>
            <li className={`${styles.li} ${url === "/about_us" ? styles.active : ""}`}>
              درباره ما
            </li>
          </Link>
          <Link to={"/contact_us"} className={styles.link}>
            <li className={`${styles.li} ${url === "/contact_us" ? styles.active : ""}`}>
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
        <Tooltip style={{ position: "relative" }} placement='bottom' title="سبد خرید" color='var(--green-primary)'>
          <Link to={"/cart"} className={`${styles.icons} ${url === "/cart" && styles.active_icon}`}>
            <CiShoppingCart size={24} color={url === "/cart" ? "var(--neutral-white)" : 'var(--green-primary)'} />
            {showCartNotif && (
              <span className={styles.notif}></span>
            )}
          </Link>

        </Tooltip>
        {!isLogin && (
          <Tooltip placement='bottom' title="ورود / ثبت نام" color='var(--green-primary)'>
            <div className={styles.icons} onClick={() => setShowLogin(true)}>
              <CiUser size={24} color='var(--green-primary)' />
            </div>
          </Tooltip>
        )}
        {isLogin && (
          <UserMneu />
        )}
      </div>
      {showLogin && (
        <div className={styles.login_before}>
          <Login setShow={setShowLogin} />
        </div>
      )}
    </div>
  )
}

export default Navbar