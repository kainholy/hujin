import React from 'react'
import styles from '@/styles/sections/top/Enbu.module.scss'
import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    "/top/enbu/1.png",
    "/top/enbu/1.png",
    "/top/enbu/1.png",
    "/top/enbu/1.png",
    "/top/enbu/1.png",
];

function Enbu() {

    const slideSettings = {
        0: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      };

  return (
    <section className={styles.enbu} id='enbu'>
      <div className={styles.container}>
        <div className={styles.textArea}>
            <h2 className={styles.title + ' c-title2 --bk'}>演舞紹介</h2>
            <p className={styles.text + ' c-body1 --bk'}>よさこいの演舞とは、代ごとに決めたテーマに基づいてオリジナル曲や振付を創作し、自ら衣装を作成するパフォーマンスです。私たちのチームは、創造力とチームワークを活かし、独自の個性を表現しています。</p>
        </div>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={slideSettings} // slidesPerViewを指定
            slidesPerView={"auto"} // ハイドレーションエラー対策
            centeredSlides={true} // スライドを中央に配置
            loop={true} // スライドをループさせる
            speed={1500} // スライドが切り替わる時の速度
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }} // スライド表示時間
            navigation // ナビゲーション（左右の矢印）
            pagination={{
              clickable: true,
            }} // ページネーション, クリックで対象のスライドに切り替わる
            className={styles.slideWrapper}
        >
            {images.map((src: string, index: number) => (
                <SwiperSlide className={styles.imgArea} key={index}>
                    <Image
                        src={src}
                        width={1920}
                        height={1038}
                        alt="Slider Image"
                        className={styles.img + ' slider-img'}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className={styles.buttonArea}>
            <a className={styles.button + ' c-button-text --wh'} href="">他の演舞が気になったらyoutubeをチャンネル登録！</a>
        </div>
      </div>
    </section>
  )
}

export default Enbu
