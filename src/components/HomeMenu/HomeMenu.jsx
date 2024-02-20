import React from 'react'
import styles from "./styles.module.css"
import MenuItem from '../useFull/MenuItem'
import TextInput from '../useFull/TextInput/TextInput'
import useScreenSize from '../../hooks/useScreenSize'
import { CiSearch } from "react-icons/ci"

const HomeMenu = () => {
    const { isSM } = useScreenSize()
    return (
        <div
            style={{ paddingTop: !isSM && "24px" }}
            className={styles.container}>
            {!isSM && (
                <TextInput
                    type="text"
                    placeholder="جستجو"
                    width="90%"
                    name="search"
                    borderColor="var(--neutral-black)"
                    outlined={true}
                    bgColor="var(--neutral-white)"
                    icon={<CiSearch size={34} />}
                />
            )}
            <p className={styles.title}>منوی رستوران</p>
            <div className={styles.menu}>
                <MenuItem picture={"/images/menu/1.png"} title={"غذای اصلی"} state={1} />
                <MenuItem picture={"/images/menu/2.png"} title={"پیش غذا"} state={2} />
                <MenuItem picture={"/images/menu/3.png"} title={"دسر"} state={3} />
                <MenuItem picture={"/images/menu/4.png"} title={"نوشیدنی"} state={4} />
            </div>
        </div>
    )
}

export default HomeMenu