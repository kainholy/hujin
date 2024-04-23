import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Message.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Message() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);
  const line6Ref = useRef(null);
  const line7Ref = useRef(null);
  const line8Ref = useRef(null);
  const line9Ref = useRef(null);
  const line10Ref = useRef(null);
  const line11Ref = useRef(null);
  const line12Ref = useRef(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const line4 = line4Ref.current;
    const line5 = line5Ref.current;
    const line6 = line6Ref.current;
    const line7 = line7Ref.current;
    const line8 = line8Ref.current;
    const line9 = line9Ref.current;
    const line10 = line10Ref.current;
    const line11 = line11Ref.current;
    const line12 = line12Ref.current;
    const line1Height = line1.clientHeight + 50;
    const lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12]

    gsap.utils.toArray(lines).forEach((line, index) => {
      gsap.fromTo(line, { backgroundPositionY: '100%', y: 10 }, {
        backgroundPositionY: '-25%',
        y: 0,
        scrollTrigger: {
          trigger: line,
          start: 'top 95%',
          end: '+='+line1Height,
          scrub: true
        }
      });
    });



  })
  return (
    <section className={styles.container} id='message'>
      <div className={styles.leftCircle}>
      </div>
      <div className={styles.leftCircleSmall}>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
            <p className={styles.text + ' c-message-text'}>
                <span className={styles.line} ref={line1Ref}>踊って、笑って、語り合う。</span><br />
                <span className={styles.line} ref={line2Ref}>そんな温かな時間を通じて、</span><br />
                <span className={styles.line} ref={line3Ref}>この世界に元気と笑顔を届けたい。</span><br /><br />

                <span className={styles.line} ref={line4Ref}>だからこそ、</span><br />
                <span className={styles.line} ref={line5Ref}>私たちはいつも失敗を恐れず、</span><br />
                <span className={styles.line} ref={line6Ref}>笑顔を忘れずにいます。</span><br /><br />

                <span className={styles.line} ref={line7Ref}>『誰かを楽しませたい』</span><br />
                <span className={styles.line} ref={line8Ref}>それが風神の信念です。</span><br /><br />

                <span className={styles.line} ref={line9Ref}>それが逆風にも負けず、<br className='sp'/>自由に笑顔を広げる、</span><br />
                <span className={styles.line} ref={line10Ref}>貴重な存在になるはずだから。</span><br /><br />

                <span className={styles.line} ref={line11Ref}>明るい未来を作るために、</span><br />
                <span className={styles.line} ref={line12Ref}>今日も小さな世界を明るく照らします。</span>
            </p>
        </div>
        <div className={styles.titleArea}>
            <h3 className={styles.title + ' c-message-title'}>
                <span>風神が<span className={styles.red}>元気</span>と<span className={styles.red}>笑顔</span>を<br /></span>
                <span className={styles.mass}>お届けします</span>
            </h3>
        </div>
      </div>
      <div className={styles.imgArea}>
        <Image className={styles.img} src="/top/message/1.png" alt="message" width={500} height={500} />
      </div>
    </section>
  )
}

export default Message