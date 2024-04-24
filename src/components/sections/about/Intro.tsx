import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/about/Intro.module.scss";

export default function Intro() {
  const [text, setText] = useState("");
  const [showLine, setShowLine] = useState(false);
  const fullText = "風神とは";
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            setText((currentText) => {
              if (currentText.length < fullText.length) {
                return fullText.slice(0, currentText.length + 1);
              } else {
                clearInterval(timer);
                setShowLine(true); // テキスト表示完了後に線を表示
                return currentText;
              }
            });
          }, 150);
        }
      });
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [headerRef]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titlearea}>
          <h1 ref={headerRef} className={styles.title}>
            {text}
          </h1>
          {showLine && <div className={styles.redLine}></div>}
        </div>
        <div className={styles.content}>
          {/* 左 */}
          <div className={styles.text}>
            <p className={styles.description}>
              千葉工業大学の学生のみで構成された、よさこいソーランのチーム『千葉工業大学よさこいソーラン風神部』です。
              ここに初代の思いを書く
            </p>
          </div>
          {/* 右 */}
          <div className={styles.imagearea}>
            <Image
              className={styles.img}
              src="/about/intro/1.png"
              alt="message"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
