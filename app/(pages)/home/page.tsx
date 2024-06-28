import BestSelling from "@/components/home/BestSelling";
import ChoosingUs from "@/components/home/ChoosingUs";
import Experience from "@/components/home/Experience";
import HomeEntrance from "@/components/home/HomeEntrance";
import Materials from "@/components/home/Materials";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/shared/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <HomeEntrance />
      <ChoosingUs />
      <BestSelling />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
