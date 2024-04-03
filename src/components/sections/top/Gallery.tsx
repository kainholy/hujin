import React from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Gallery.module.scss'

function Gallery() {
  return (
    <div className={styles.container}>
        <div className={styles.bgBigCircle}></div>
        <div className={styles.bgSmallCircle}></div>
        <div className={styles.content}>
            <div className={styles.firstImgContainer +' '+ styles.imgContainer}>
                <Image className={styles.img} src='/top/gallery/1.webp' alt='hero' width={2000} height={2000} ></Image>
            </div>
            <div className={styles.secondImgContainer +' '+ styles.imgContainer}>
                <Image className={styles.img} src='/top/gallery/2.webp' alt='hero' width={2000} height={2000} ></Image>
            </div>
            <div className={styles.thirdImgContainer +' '+ styles.imgContainer}>
                <Image className={styles.img} src='/top/gallery/3.webp' alt='hero' width={2000} height={2000} ></Image>
            </div>
            <div className={styles.fourthImgContainer +' '+ styles.imgContainer}>
                <Image className={styles.img} src='/top/gallery/4.webp' alt='hero' width={2000} height={2000} ></Image>
            </div>
            <div className={styles.fifthImgContainer +' '+ styles.imgContainer}>
                <Image className={styles.img} src='/top/gallery/5.webp' alt='hero' width={2000} height={2000} ></Image>
            </div>
        </div>
    </div>
  )
}

export default Gallery
