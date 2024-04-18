import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Mv.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Mv() {
  const titleRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const container = containerRef.current
    const titleHeight = title.clientHeight
    const windowHeight = window.innerHeight
    const initialTop = windowHeight - titleHeight - 40

    gsap.set(title, {top: initialTop})

    gsap.to(title, {
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0,
        onUpdate: (self) => {
          const top = initialTop + self.scroll.v
          if (self.scroll.v >= 253) {
            gsap.set(title, {top: initialTop + 253})
          } else {
            gsap.set(title, {top: top})
          }
        }
      }
    })
  })


  return (
    <div className={styles.container} ref={containerRef}>

      <div className={styles.bg}>
      </div>

      <div className={styles.slide}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image 
              src="/top/mv/1.png"
              alt="Your Image"
              width={2000}
              height={2000}
              className={styles.img}
            />
          </li>
        </ul>
      </div>

      <div className={styles.titleArea} ref={titleRef}>
        <h1 className={styles.title + ' c-mv-title --bk'}>駆けろ<span className={styles.titleBlue + ' --blue'}>青</span>春、轟け躍動</h1>
      </div>
    </div>
  )
}

export default Mv
