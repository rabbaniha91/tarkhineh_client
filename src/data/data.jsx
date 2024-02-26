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


export const carouselImages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
]

export const branchesitem = [
    {
        label: (
            <div style={{ width: "144px" }}>
                اکباتان
            </div>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <div>
                چالوس
            </div>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <div>
                اقدسیه
            </div>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <div>
                ونک
            </div>
        ),
        key: '3',
    },

];
export const menuItem = [
    {
        label: (
            <Link to={"/menu"} state={1} style={{ width: "144px", display:"inline-block" }}>
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
export const userMenuItem = [
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

            <div style={{
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


