import styles from "@/styles/Home.module.css";
import { client } from "../../../libs/client";
import type { News } from "../../../types/news";
import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import NewsItem from "@/components/sections/news/NewsItem"; // 新しく追加

//SSG
export const getStaticProps = async () => {
  const news = await client.get({ endpoint: "news" });

  return {
    props: {
      news: news.contents,
    },
  };
};

type Props = {
  news: News[];
};

const News: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  news,
}: Props) => {
  return (
    <div>
      <ul>
        {news.map((news) => (
          <NewsItem key={news.id} news={news} /> // NewsItemコンポーネントを使用
        ))}
      </ul>
    </div>
  );
};

export default News;
