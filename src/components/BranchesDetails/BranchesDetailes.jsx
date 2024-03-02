import React from 'react'
import styles from "./styles.module.css"

const BranchesDetailes = ({ branch }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{`شعبه ${branch}`}</h4>
      <swiper-container
        className={`mySwiper`}
        navigation="true"
        loop="true"
        rtl="true"
        space-between="1"
      >
        <swiper-slide>
          <img src='/images/tour/11.jpg' alt="تصاویر شعبه" />
        </swiper-slide>
        <swiper-slide>
          <img src='/images/tour/12.jpg' alt="تصاویر شعبه" />
        </swiper-slide>
        <swiper-slide>
          <img src='/images/tour/13.jpg' alt="تصاویر شعبه" />
        </swiper-slide>
        <swiper-slide>
          <img src='/images/tour/14.jpg' alt="تصاویر شعبه" />
        </swiper-slide>
      </swiper-container>
    </div>
  )
}

export default BranchesDetailes