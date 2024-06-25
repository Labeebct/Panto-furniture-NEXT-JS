import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import React from "react";

const Experience = () => {
  return (
   <div className="w-full py-24 h-auto">
     <div className="flex w-full  h-[380px] bg-white">
      <div className="h-full flex-1">
        <Image
          src={"/assets/Rectangle 1446.png"}
          className="m-auto ml-10 rounded-xl"
          alt="hall"
          width={550}
          height={580}
        />
      </div>
      <div className="flex flex-col justify-between h-full flex-1">
        <h4 className="text-[#e58411] font-lexend">EXPERIENCES</h4>
        <h3 className="font-lexend font-medium text-[2.2rem]">
          We Provide You The <br /> Best Experience
        </h3>
        <p className="font-lexend font-extralight tracking-wider">
          You don’t have to worry about the result because all of these <br />
          interiors are made by people who are professionals in their fields <br />
          with an elegant and lucurious style and with premium quality <br /> materials
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
