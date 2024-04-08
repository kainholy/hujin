import React, { useRef } from "react";
import styles from "@/styles/contact/Contact.module.scss";
import Hero from "@/components/hero/Hero";

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
    <div className={styles.container}>
      <Hero />
      <h1 className={styles.title}>お問い合わせ</h1>

      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div className={styles.row}>
          <div className={styles.label}>
            <label htmlFor="name">お名前</label>
            <span>必須</span>
          </div>

          <input
            className={styles.input}
            type="text"
            id="name"
            required
            ref={nameRef}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <label className={styles.item} htmlFor="email">
              メールアドレス
            </label>
            <span>必須</span>
          </div>

          <input
            className={styles.input}
            type="text"
            id="email"
            required
            ref={emailRef}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <label className={styles.item} htmlFor="message">
              メッセージ
            </label>
            <span>必須</span>
          </div>

          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            required
            ref={messageRef}
          ></textarea>
        </div>

        <div className={styles.btn}>
          <button className={styles.button} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
