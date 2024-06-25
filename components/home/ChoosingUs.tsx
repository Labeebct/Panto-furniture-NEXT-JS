import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";

interface DataItem {
  id: number;
  title: string;
  discription: string;
}

const ChoosingUs: React.FC = () => {
  const datas: DataItem[] = [
    {
      id: 1,
      title: "Luxury facilities",
      discription:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    },
    {
      id: 3,
      title: "Affordable Price",
      discription:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      id: 1,
      title: "Many Choices",
      discription:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
      <div className="flex justify-around items-center py-5 w-full h-auto ">
        <div className="flex justify-center items-center flex-1 h-52 font-medium text-[1.3rem] font-lexend">
          Why <br /> Choosing Us
        </div>
        {datas.map((data) => (
          <div
            key={data.id}
            className="flex flex-col justify-around flex-1 h-52 p-4"
          >
            <h3 className="font-medium font-lexend text-[1.1rem]">
              {data.title}
            </h3>
            <p className="font-lexend text-[.9rem] font-extralight tracking-wide">
              {data.discription}
            </p>
            <div className="flex items-center gap-2 cursor-pointer duration-200 ease-in-out hover:translate-x-2">
              <h4 className="text-[#e58411] font-lexend">More Info</h4>{" "}
              <EastIcon className="text-[#e58411]" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChoosingUs;
