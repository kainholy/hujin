import React from 'react'
import styles from '@/styles/sections/top/Enbu.module.scss'
import Image from 'next/image'

function Enbu() {
  return (
    <section className={styles.enbu} id='enbu'>
      <div className={styles.container}>
        <div className={styles.textArea}>
            <h2 className={styles.title + ' c-title2 --bk'}>演舞紹介</h2>
            <p className={styles.text + ' c-body1 --bk'}>よさこいの演舞とは、代ごとに決めたテーマに基づいてオリジナル曲や振付を創作し、自ら衣装を作成するパフォーマンスです。私たちのチームは、創造力とチームワークを活かし、独自の個性を表現しています。</p>
        </div>
        <div className={styles.slider}>
            <div className={styles.sliderWrapper}>
                <div className={styles.sliderItem}>
                    <div className={styles.imgArea}>
                        <Image className={styles.img} src='/top/enbu/1.png' alt='hero' width={800} height={800} ></Image>
                    </div>
                </div>
                <div className={styles.sliderItem}>
                    <div className={styles.imgArea}>
                        <Image className={styles.img} src='/top/enbu/1.png' alt='hero' width={800} height={800} ></Image>
                    </div>
                </div>
                <div className={styles.sliderItem}>
                    <div className={styles.imgArea}>
                        <Image className={styles.img} src='/top/enbu/1.png' alt='hero' width={800} height={800} ></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.buttonArea}>
            <a className={styles.button + ' c-button-text --wh'} href="">他の演舞が気になったらyoutubeをチャンネル登録！</a>
        </div>
      </div>
    </section>
  )
}

export default Enbu
