import React from 'react'
import { Drawer, Divider, Menu } from "antd"
import { IoIosClose, IoIosArrowDown } from "react-icons/io";


import { mobileMenuItems } from '../../../data/data';
import styles from "./styles.module.css"



const CustomDrawer = ({ title, placement, open, setOpen }) => {

    return (


        <Drawer
            title={title}
            placement={placement}
            closable={false}
            onClose={() => setOpen(false)}
            open={open}
            key={placement}
            styles={{ header: { padding: "0", margin: "0" }, }}
        >
            <IoIosClose
                onClick={() => setOpen(false)}
                size={34}
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    cursor: "pointer"
                }}
            />
            <Menu
                style={{ boxShadow: "none", backgroundColor: "transparent", border: "none" }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                items={mobileMenuItems}
            />

        </Drawer>


    )
}

export default CustomDrawer