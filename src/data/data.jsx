import { CiUser } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

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
            <div style={{ width: "144px" }}>
                غذای اصلی
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
                پیش غذا
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
                دسر
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
                نوشیدنی
            </div>
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