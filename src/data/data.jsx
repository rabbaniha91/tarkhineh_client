import { CiUser } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { PiHouseSimpleLight } from "react-icons/pi";
import { BsMenuUp } from "react-icons/bs";
import { PiGitBranchThin } from "react-icons/pi";
import { MdRoundaboutLeft } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { setlogoutUser } from "../utils";
import { useContentProvider } from "../Context/provider"
import { Button, Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";



export const carouselImages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
]

export const branchesitem = [
    {
        label: (
            <Link to={"/branches/اکباتان"} state={"اکباتان"} style={{ width: "144px", display: "inline-block" }}>
                اکباتان
            </Link>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/branches/چالوس"} state={"چالوس"}>
                چالوس
            </Link>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/branches/اقدسیه"} state={"اقدسیه"}>
                اقدسیه
            </Link>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/branches/ونک"} state={"ونک"}>
                ونک
            </Link>
        ),
        key: '3',
    },

];
export const menuItem = [
    {
        label: (
            <Link to={"/menu"} state={1} style={{ width: "144px", display: "inline-block" }}>
                غذای اصلی
            </Link>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/menu"} state={2}>
                پیش غذا
            </Link>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/menu"} state={3}>
                دسر
            </Link>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to={"/menu"} state={4}>
                نوشیدنی
            </Link>
        ),
        key: '3',
    },

];



export const UserMneu = () => {
    const { setIsLogin } = useContentProvider()
    const userMenuItem = [
        {
            label: (

                <div style={{
                    width: "144px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px"
                }}>
                    <CiUser size={24} />
                    <span>پروفایل</span>

                </div>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (

                <div style={{
                    width: "144px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px"
                }}>
                    <CiWallet size={24} />
                    <span>پیگیری سفارش</span>

                </div>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (

                <div style={{
                    width: "144px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px"
                }}>
                    <CiHeart size={24} />
                    <span>علاقه مندی ها</span>

                </div>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: (

                <div style={{
                    width: "144px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px"
                }}>
                    <CiLocationOn size={24} />
                    <span>آدرس های من</span>

                </div>
            ),
            key: '3',
        },
        {
            type: 'divider',
        },
        {
            label: (

                <div
                    onClick={() => {
                        setlogoutUser()
                        setIsLogin(false)
                    }}
                    style={{
                        width: "144px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "4px"
                    }}>
                    <CiLogout size={24} />
                    <span>خروج از حساب</span>

                </div>
            ),
            key: '4',
        },
        {
            type: 'divider',
        },


    ];

    return (
        <Dropdown menu={{ items: userMenuItem }}>
            <Button style={{
                width: "auto",
                backgroundColor: "var(--green-green-tint-1)",
                border: "none"
            }}>
                <Space>
                    <CiUser size={24} color='var(--green-primary)' />
                    <IoIosArrowDown color='var(--green-primary)' />
                </Space>
            </Button>
        </Dropdown>
    )
}


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const mobileMenuItems = [
    getItem('صفحه اصلی', '1', <PiHouseSimpleLight />),
    getItem('منو', 'sub1', <BsMenuUp />, [
        getItem('غذای اصلی', '5'),
        getItem('پیش غذا', '6'),
        getItem('دسر', '7'),
        getItem('نوشیدنی', '8'),
    ]),
    getItem('شعبه', 'sub2', <PiGitBranchThin />, [
        getItem('اکباتان', '9'),
        getItem('چالوس', '10'),
        getItem('اقدسیه', '11'),
        getItem('ونک', '12'),
    ]),
    getItem('درباره ما', '13', <MdRoundaboutLeft />),
    getItem('تماس با ما', '14', <IoCallOutline />),
];


