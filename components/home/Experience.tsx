import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="w-full my-6 px-4 h-auto">
      <div className="flex flex-col lg:flex-row w-full items-center  h-auto bg-white">
        <div className="flex px-10 justify-center lg:justify-start items-center h-full flex-1">
          <Image
            src={"/assets/Rectangle 1446.png"}
            className="rounded-xl"
            alt="hall"
            width={530}
            height={530}
          />
        </div>
        <div className="flex flex-col justify-around min-h-[430px] items-center lg:items-start h-full flex-1">
          <h4 className="text-[#e58411] font-lexend">EXPERIENCES</h4>
          <h3 className="font-lexend font-medium text-center lg:text-start text-[1.8rem] lg:text-[2.2rem]">
            We Provide You The <br /> Best Experience
          </h3>
          <p className="font-lexend text-center lg:text-start font-extralight tracking-wider">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <div className="flex items-center gap-2 cursor-pointer duration-200 ease-in-out hover:translate-x-2">
            <h4 className="text-[#e58411] font-lexend">More Info</h4>
            <EastIcon className="text-[#e58411]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
