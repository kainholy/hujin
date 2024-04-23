import React from "react";
import styles from "@/styles/sections/top/News.module.scss";
import Image from "next/image";
import Link from "next/link";
import { News } from "../../../../types/news";

type Props = {
  news: News[];
};

export const TopNews = (props: Props) => {
  const { news } = props;
  return (
    <section className={styles.news} id="news">
      <div className={styles.container}>
        <h2 className={styles.title + " c-title2 --bk"}>お知らせ</h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            {news.slice(0, 3).map((news: any, index: number) => (
              <Link href={`/news/${news.id}`}>
                <li className={styles.item}>
                  <div
                    key={news.id}
                    className={styles.fadeUp}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className={styles.imgArea}>
                      <img
                        src={news.eye_catch.url}
                        alt={news.title}
                        className={styles.img}
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className={styles.textArea}>
                      <p className={styles.date + " c-news-date --gray"}>
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </p>
                      <p className={styles.category + " c-news-category --bk"}>
                        {news.tag}
                      </p>
                      <p className={styles.text + " c-news-text --bk"}>
                        {news.title}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          {/* <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.imgArea}>
                            <Image className={styles.img} src='/top/news/1.png' alt='' width={1000} height={1000} ></Image>
                        </div>
                        <div className={styles.textArea}>
                            <p className={styles.date + ' c-news-date --gray'}>2021.10.10</p>
                            <p className={styles.category + ' c-news-category --bk'}>演舞</p>
                            <p className={styles.text + ' c-news-text --bk'}>新メンバー募集中！</p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.imgArea}>
                            <Image className={styles.img} src='/top/news/1.png' alt='' width={1000} height={1000} ></Image>
                        </div>
                        <div className={styles.textArea}>
                            <p className={styles.date + ' c-news-date --gray'}>2021.10.10</p>
                            <p className={styles.category + ' c-news-category --bk'}>演舞</p>
                            <p className={styles.text + ' c-news-text --bk'}>新メンバー募集中！</p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.imgArea}>
                            <Image className={styles.img} src='/top/news/1.png' alt='' width={1000} height={1000} ></Image>
                        </div>
                        <div className={styles.textArea}>
                            <p className={styles.date + ' c-news-date --gray'}>2021.10.10</p>
                            <p className={styles.category + ' c-news-category --bk'}>演舞</p>
                            <p className={styles.text + ' c-news-text --bk'}>新メンバー募集中！</p>
                        </div>
                    </li>
                </ul> */}
        </div>

        <div className={styles.buttonArea}>
          <Link className={styles.button + " c-button-text --wh"} href="/news">
            <span className={styles.buttonText}>もっと見る</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNews;
