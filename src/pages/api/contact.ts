import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //管理人が受け取るメール
  const toHostMailData = {
    from: req.body.email,
    to: process.env.EMAIL_ADDRESS,
    subject: `お問い合わせ ${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>名前</p>
      <p>${req.body.name}</p>
      <p>メッセージ内容</p>
      <p>${req.body.message}</p>
      <p>メールアドレス</p>
      <p>${req.body.email}</p>
      `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return res.send("success");
}
