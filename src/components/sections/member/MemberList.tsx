import React from "react";
import { MemList } from "../../../../types/member"; // 確認してください
import Link from "next/link";
import styles from "@/styles/sections/member/MemberList.module.scss";

type Props = {
  members: MemList[]; // 複数のブログポストを受け取るように変更
};

// const MemberList = ({ members }: Props) => {
//   return (
//     <section>
//       {members.map((post, postIndex) => (
//         <div key={postIndex}>
//           <h2>{post.title}</h2>
//           {post.body.map((memberItem, memberIndex) => (
//             <div key={memberIndex}>
//               <img
//                 src={memberItem.img.url}
//                 alt=""
//                 style={{ width: "969px", height: "auto" }}
//               />
//               <h3>{memberItem.name}</h3>
//               <p>{memberItem.song}</p>
//               <p>{memberItem.holiday}</p>
//               <p>{memberItem.celebrity}</p>
//               <p>{memberItem.comment}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </section>
//   );
// };
const MemberList = ({ members }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {members.map((post, postIndex) => (
          <div className={styles.card} key={postIndex}>
            <Link href={`/member/${post.id}`} className={styles.link}>
              <img
                src={post.eyecatch.url}
                alt=""
                width={400}
                height={400}
                className={styles.image}
              />
              <div className={styles.content}>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.tag}>{post.tag}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberList;
