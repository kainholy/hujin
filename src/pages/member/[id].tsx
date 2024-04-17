import { MemList } from "../../../types/member";
import { client } from "../../../libs/client";
import Link from "next/link";
import styles from "@/styles/sections/member/Member.module.scss";
import Hero from "@/components/hero/Hero";

type Props = {
  member: MemList;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "member" });

  const paths = data.contents.map((content: any) => `/member/${content.id}`);

  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "member", contentId: id });

  return {
    props: {
      member: data,
    },
  };
};
const MemberList = (member: Props) => {
  const body = member.member.body;
  return (
    <section className={styles.section}>
      <Hero />
      <div className={styles.container}>
        {body.map((member: any, index: number) => (
          <div key={index} className={styles.card}>
            <div className={styles.item}>
              <img src={member.img.url} className={styles.img} alt="memimg" />
              <div className={styles.content}>
                <h1>{member.name}</h1>
                <p>
                  <span>好きなよさこいソング</span>
                  <br />
                  {member.song}
                  <br />
                  <span>休日の過ごし方</span>
                  <br />
                  {member.holiday}
                  <br />
                  <span>好きな有名人</span>
                  <br />
                  {member.celebrity}
                  <br />
                  <span>ひとこと</span>
                  <br />
                  {member.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MemberList;
