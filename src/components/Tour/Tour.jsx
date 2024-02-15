import React from 'react'
import BranchesCart from '../useFull/branchesCart/BranchesCart'
import styles from "./styles.module.css"

const Tour = () => {
    return (
        <div className={styles.container}>
            <BranchesCart
                picture={"/images/tour/1.png"}
                title={"شعبه اکباتان"}
                address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            />
            <BranchesCart
                picture={"/images/tour/2.png"}
                title={"شعبه چالوس"}
                address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}
            />
            <BranchesCart
                picture={"/images/tour/3.png"}
                title={"شعبه اقدسیه"}
                address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}
            />
            <BranchesCart
                picture={"/images/tour/4.png"}
                title={"شعبه ونک"}
                address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}
            />
        </div>
    )
}

export default Tour