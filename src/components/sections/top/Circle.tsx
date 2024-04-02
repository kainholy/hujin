import React, { useEffect } from 'react'
import styles from '@/styles/sections/top/Circle.module.scss'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Circle() {
    
    useEffect(() => {
        const pin = document.querySelector('#pin')
        const circleImg = document.querySelector('#circleImg')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pin,
                start: 'center center',
                end: '80% center',
                scrub: 1,
            }
        });

        gsap.set(circleImg, {borderRadius: 800, scale: 0.8});

        tl
        .to(circleImg, { borderRadius: 0, scale: 1 });

    })

  return (
    <div className={styles.container} id='pin'>
        <div className={styles.imgArea} id='circleImg'></div>
    </div>
  )
}

export default Circle
