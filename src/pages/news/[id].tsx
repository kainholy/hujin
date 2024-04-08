import { News } from "../../../types/news";
import { client } from "../../../libs/client";
import Styles from "@/styles/sections/news/News.module.scss";

type Props = {
  news: News;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => `/news/${content.id}`);

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

export default function NewsPage({ news }: Props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h1>{news.title}</h1>
      </div>

      <div>
        <div>
          <img src={news.eye_catch.url} alt="news" className={Styles.img} />
        </div>

        <div>
          <div dangerouslySetInnerHTML={{ __html: `${news.body}` }}></div>
        </div>
      </div>
    </div>
  );
}
