// 画像を表す型
export type Image = {
  url: string;
  height: number;
  width: number;
};

// メンバー情報を表す型
export type Member = {
  fieldId: "member";
  img: Image;
  name: string;
  song: string;
  holiday: string;
  celebrity: string;
  comment: string;
};

// ブログポスト全体を表す型
export type MemList = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eyecatch: Image;
  comment: string;
  tag: string;
  body: Member[];
};
