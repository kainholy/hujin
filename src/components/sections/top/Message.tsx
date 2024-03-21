import React from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Message.module.scss'

function Message() {
  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
            <p className={styles.text + ' c-message-text'}>
                踊って、笑って、語り合う。<br />
                そんな温かな時間を通じて、<br />
                この世界に元気と笑顔を届けたい。<br /><br />

                だからこそ、<br />
                私たちはいつも失敗を恐れず、<br />
                笑顔を忘れずにいます。<br /><br />

                『誰かを楽しませたい』<br />
                それが風神の信念です。<br /><br />

                それが逆風にも負けず、自由に笑顔を広げる、<br />
                貴重な存在になるはずだから。<br /><br />

                明るい未来を作るために、<br />
                今日も小さな世界を明るく照らします。
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
    </div>
  )
}

export default Message