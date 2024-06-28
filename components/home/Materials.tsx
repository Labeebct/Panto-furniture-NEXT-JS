import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import React from "react";

const Materials = () => {
  return (
    <div className="w-full px-10 my-6  h-auto bg-white">
      <div className="flex flex-col-reverse lg:flex-row justify-center h-auto  w-full  mx-auto">
        <div className="flex pl-5 flex-col items-center lg:items-start justify-around min-h-[430px] pr-12 flex-1">
          <h4 className="text-[#e58411] font-lexend uppercase">Materials</h4>
          <h3 className="font-lexend font-medium text-[1.8rem]  md:text-[2.2rem] text-center lg:text-start leading-tight mt-2">
            Very Serious <br /> Materials For Making <br /> Furniture
          </h3>
          <p className="font-lexend text-center lg:text-start font-light text-gray-600 mt-4">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <div className="flex items-center gap-2 cursor-pointer duration-200 ease-in-out hover:translate-x-2 mt-6">
            <h4 className="text-[#e58411] font-lexend">More Info</h4>
            <EastIcon className="text-[#e58411]" />
          </div>
        </div>
        <div className="flex-1 mx-auto grid min-h-[400px] w-full grid-cols-3 gap-4 ">
          <div className="col-span-2 row-span-2 relative">
            <Image
              src="/assets/material 3.png"
              layout="fill"
              objectFit="contain"
              alt="Large room"
              className="rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/material 1.png"
              layout="fill"
              objectFit="contain"
              alt="Small room 1"
              className="rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/material 2.png"
              layout="fill"
              objectFit="contain"
              alt="Small room 2"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;