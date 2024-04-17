import React from "react";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Contact from "@/components/sections/contact/Contact";

function index() {
  return (
    <div className={styles.container}>
      <Hero />
      <Contact />
    </div>
  );
}

export default index;
