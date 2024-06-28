import React from "react";
import Header from "../shared/Header";
import SearchBar from "./SearchBar";

const HomeEntrance = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-no-repeat w-full bg-cover bg-center bg-[url('/assets/IMG-0383-scaled.jpg')]">
      <Header />
      <div className="flex flex-col items-center gap-5 mb-52">
        <h3 className="font-lexend font-medium text-center text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[3rem]">
          Make Your Interior More <br /> Minimalistic & Modern
        </h3>
        <h3 className="font-lexend font-extralight text-center text-white text-[.6rem] sm:text-[.7rem] md:text-[.8rem] lg:text-[.95rem] tracking-wider">
          Turn your room with panto into a lot more minimalist <br /> and modern
          with ease and speed
        </h3>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomeEntrance;
