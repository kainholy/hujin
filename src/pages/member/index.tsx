import React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../../libs/client";
import MemberList from "@/components/sections/member/MemberList";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "member" });
  return {
    props: {
      member: data.contents,
    },
  };
};

const Member: NextPage<Props> = ({ member }) => {
  return (
    <div>
      <MemberList members={member} />
    </div>
  );
};

export default Member;
