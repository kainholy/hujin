import React, { useRef } from "react";
import Button from "react-bootstrap/Button";

function index() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("submit");

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain,",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("送信しました");
    });
  };
  return (
    <div>
      <h2>お問い合わせ</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" required ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="text" id="email" required ref={emailRef} />
        </div>
        <div>
          <label htmlFor="message">メッセージ</label>
          <textarea
            name="message"
            id="message"
            required
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default index;
