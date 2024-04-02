import { MemList } from "../../../types/member";
import { client } from "../../../libs/client";

type Props = {
  member: MemList;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "member" });

  const paths = data.contents.map((content: any) => `/member/${content.id}`);

  console.log(paths);
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
    <section>
      {body.map((member: any, index: number) => (
        <div key={index}>
          <h2>{member.title}</h2>
          <img
            src={member.img.url}
            alt=""
            style={{ width: "969px", height: "auto" }}
          />
          <h3>{member.name}</h3>
          <p>{member.song}</p>
          <p>{member.holiday}</p>
          <p>{member.celebrity}</p>
          <p>{member.comment}</p>
        </div>
      ))}
    </section>
  );
};
export default MemberList;

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

// export default MemberList;
