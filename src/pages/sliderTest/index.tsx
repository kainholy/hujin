import Image from "next/image";

// オプションをインポートする
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/layout/sliderTest.module.scss";

// publicフォルダの画像
const images = [
  "/top/mv/1.webp",
  "/top/mv/2.webp",
  "/top/mv/3.webp",
  "/top/mv/4.webp",
  "/top/mv/5.webp",
];

export default function BasicSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade" // スライドの切り替わりのアニメーション
      fadeEffect={{ crossFade: true }} // クロスフェード
      loop={true} // スライドをループさせる
      loopAdditionalSlides={1} // ループ時に追加するスライド数
      speed={1000} // スライドが切り替わる時の速度
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        waitForTransition: true,
      }} // スライド表示時間
      followFinger={false} // ユーザーの操作によるスライドの停止
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }} // ページネーション, クリックで対象のスライドに切り替わる
      className={styles.slideWrapper}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide className={styles.swiperSlide} key={index}>
          <Image
            src={src}
            width={1920}
            height={1038}
            alt="Slider Image"
            className={styles.slideImage + ' slider-img'}
          />
        </SwiperSlide>
      ))}
      <div className={styles.swiperPagination + ' swiper-pagination'} />
    </Swiper>
  );
}