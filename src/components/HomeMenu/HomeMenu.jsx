import React from 'react'
import styles from "./styles.module.css"
import MenuItem from '../useFull/MenuItem'
import TextInput from '../useFull/TextInput/TextInput'
import useScreenSize from '../../hooks/useScreenSize'

const HomeMenu = () => {
    const { isSM } = useScreenSize()
    return (
        <div className={styles.container}>
            {!isSM && (
                <TextInput
                    type="text"
                    placeholder="جستجو"
                    width="90%"
                    name="search"
                    borderColor="var(--neutral-black)"
                    outlined={true}
                    bgColor="var(--neutral-white)" />
            )}
            <p className={styles.title}>منوی رستوران</p>
            <div className={styles.menu}>
                <MenuItem picture={"/images/menu/1.png"} title={"غذای اصلی"} />
                <MenuItem picture={"/images/menu/2.png"} title={"پیش غذا"} />
                <MenuItem picture={"/images/menu/3.png"} title={"دسر"} />
                <MenuItem picture={"/images/menu/4.png"} title={"نوشیدنی"} />
            </div>
        </div>
    )
}

export default HomeMenu