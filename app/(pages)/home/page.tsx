import BestSelling from "@/components/home/BestSelling";
import ChoosingUs from "@/components/home/ChoosingUs";
import Experience from "@/components/home/Experience";
import HomeEntrance from "@/components/home/HomeEntrance";
import Materials from "@/components/home/Materials";
import React from "react";

const page = () => {
  return (
    <>
      <HomeEntrance />
      <ChoosingUs />
      <BestSelling />
      <Experience />
      <Materials />
    </>
  );
};

export default page;
