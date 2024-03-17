import React from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Mv.module.scss'

function Mv() {
  return (
    <div className={styles.container}>

      <div className={styles.bg}>
      </div>

      <div className={styles.slide}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image 
              src="/top/mv/1.png"
              alt="Your Image"
              fill
              className={styles.img}
            />
          </li>
        </ul>
      </div>

      <div className={styles.titleArea}>
        <h1 className={styles.title + ' c-mv-title --bk'}>駆けろ<span className={styles.titleBlue + ' --blue'}>青</span>春、轟け躍動</h1>
      </div>
    </div>
  )
}

export default Mv
