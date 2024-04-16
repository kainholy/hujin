// pages/confirm.tsx
import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/confirm/Confirm.module.scss";

const Confirm = () => {
  const router = useRouter();
  const { name, email, message } = router.query;

  const handleBack = () => {
    // 元のフォームページに戻る際に、入力されたデータをクエリパラメータとして渡す
    //のちにもっと保守性の高いのにする
    router.push({
      pathname: "/contact", // 適切なフォームページのパスに変更してください
      query: { name, email, message }, // 現在のフォームデータ
    });
  };

  const handleSubmit = async () => {
    // ここにデータ送信のためのAPIコールを実装
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain,",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    }).then((res) => {
      if (res.status === 200) console.log("送信しました");
      if (res.status === 200) alert("送信完了");
      if (res.ok) {
        // 送信成功時の処理（例: 完了ページへのリダイレクト）
        router.push("/contact/success");
      }
    });
    // }).then((response) => {
    //   if (response.ok) {
    //     // 送信成功時の処理（例: 完了ページへのリダイレクト）
    //     router.push("/success");
    //   } else {
    //     // エラー処理
    //     alert("送信に失敗しました。");
    //   }
    // });
  };

  return (
    <div>
      <h1 className={styles.title}>確認ページ</h1>

      <div className={styles.list}>
        <p className={styles.name}>名前</p>
        <span>{name}</span>
      </div>

      <div className={styles.list}>
        <p className={styles.email}>メールアドレス</p>
        <span>{email}</span>
      </div>

      <div className={styles.list}>
        <p className={styles.message}>メッセージ:</p>
        <span>{message}</span>
      </div>

      {/* 「戻る」と「送信」ボタンをここに追加 */}
      <div className={styles.btn}>
        <button className={styles.btnback} onClick={handleBack}>
          戻る
        </button>
        <button className={styles.btnback} onClick={handleSubmit}>
          送信
        </button>
      </div>
    </div>
  );
};

export default Confirm;
