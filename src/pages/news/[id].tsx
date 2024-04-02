import { News } from "../../../types/news";
import { client } from "../../../libs/client";

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
    <div>
      <h1>{news.title}</h1>
      <p>{news.createdAt}</p>
    </div>
  );
}
