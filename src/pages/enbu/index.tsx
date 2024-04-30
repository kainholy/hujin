import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Title from "@/components/sections/enbu/Title";
import Card from "@/components/sections/enbu/Card";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Title />
        <Card />
      </main>
      <Footer />
    </>
  );
};

export default index;
