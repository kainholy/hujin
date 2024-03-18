import React from "react";
import Link from "next/link";
import { News } from "../../../../types/news"; // This line is added to import the News type

type NewsItemProps = {
  news: News;
};

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <li key={news.id}>
      <Link href={`/news/${news.id}`}>
        <img
          src={news.eye_catch.url}
          alt={news.title}
          width={200}
          height={200}
        />
        <div>{news.title}</div>
      </Link>
    </li>
  );
};

export default NewsItem;
