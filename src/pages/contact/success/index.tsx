import React from "react";
import Success from "@/components/sections/contact/Success";
import Hero from "@/components/sections/hero/Hero";
import styles from "@/styles/layout/TopPage.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Success />
    </div>
  );
};

export default index;
