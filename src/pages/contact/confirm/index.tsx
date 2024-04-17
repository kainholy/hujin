import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Confirm from "@/components/sections/contact/Confirm";
import styles from "@/styles/layout/TopPage.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Confirm />
    </div>
  );
};

export default index;
