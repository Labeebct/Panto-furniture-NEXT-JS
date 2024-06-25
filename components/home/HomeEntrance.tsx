import React from "react";
import Header from "../shared/Header";
import SearchBar from "./SearchBar";

const HomeEntrance = () => {
  return (
    <div
      style={{ boxShadow: "inset 0 -50px 30px -20px rgba(255, 255, 255, 0.6)" }}
      className="flex flex-col justify-center items-center h-screen bg-no-repeat w-full bg-cover bg-center bg-[url('/assets/IMG-0383-scaled.jpg')]"
    >
      <Header />
      <div className="flex flex-col items-center gap-5 mb-52">
        <h3 className="font-lexend font-medium text-center text-white text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
          Make Your Interior More <br /> Minimalistic & Modern
        </h3>
        <h3 className="font-lexend font-extralight text-center text-white text-[.8rem] sm:text-[.85rem] lg:text-[.95rem] tracking-wider">
          Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed
        </h3>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomeEntrance;