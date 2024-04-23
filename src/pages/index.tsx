'use client'
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/layout/TopPage.module.scss";
import Mv from "@/components/sections/top/Mv";
import Gallery from "@/components/sections/top/Gallery";
import Message from "@/components/sections/top/Message";
import Circle from "@/components/sections/top/Circle";
import Enbu from "@/components/sections/top/Enbu";
import TopNews from "@/components/sections/top/News";
import Sns from "@/components/sections/top/Sns";
import We from "@/components/sections/top/We";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../libs/client";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });
  return {
    props: {
      news: data.contents,
    },
  };
};
const Home: NextPage<Props> = ({ news }) => {
  return (
    <>
      <Head>
        <title>topページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <Mv />
          <Gallery />
          <Message />
          <Circle />
          <Enbu />
          <TopNews news={news} />
          <Sns />
          <We />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
