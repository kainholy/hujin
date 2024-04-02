import React from "react";
import Link from "next/link";
import { News } from "../../../../types/news"; // This line is added to import the News type
import styles from "@/styles/sections/news/NewsItem.module.scss";

type Props = {
  news: News[];
};

export const NewsListItem = (props: Props) => {
  const { news } = props;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 上の段 */}
        <div className={styles.title}>
          <h2 className={styles.title_text}>お知らせ</h2>
        </div>
        {/* 下の段 */}
        <div className={styles.gridcontainer}>
          {news.map((news: any, index: number) => (
            <div className={styles.card}>
              <div
                key={news.id}
                className={styles.fadeUp}
                style={{ animationDelay: `${index * 0.3}s` }} // 0.2秒ごとにアニメーションを開始
              >
                <Link href={`/news/${news.id}`} key={news.id}>
                  <div className={styles.img}>
                    <img
                      src={news.eye_catch.url}
                      alt={news.title}
                      width={384}
                      height={216}
                    />
                  </div>
                  <p className={styles.date}>{news.createdAt}</p>
                  <p className={styles.tag}>{news.tag}</p>
                  <p className={styles.Article_title}>{news.title}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// type NewsItemProps = {
//   news: News;
// };

// const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
//   return (
//     <li key={news.id} className={styles.container}>
//       <Link href={`/news/${news.id}`}>
//         <img
//           src={news.eye_catch.url}
//           alt={news.title}
//           width={200}
//           height={200}
//         />
//         <div>{news.title}</div>
//       </Link>
//     </li>
//   );
// };

export default NewsListItem;
