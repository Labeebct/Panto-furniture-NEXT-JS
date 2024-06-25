import React from "react";
import CategoryFilter from "./CategoryFilter";
import EastIcon from "@mui/icons-material/East";

import Products from "./Products";

const BestSelling = () => {
  return (
    <div className="flex justify-around items-center flex-col w-full h-auto gap-10 py-10 bg-gray-100 ">
      <h3 className="font-medium text-[1.7rem] font-lexend ">
        Best Selling Product
      </h3>
      <CategoryFilter />
      <Products />
      <div className="flex items-center gap-2 cursor-pointer duration-200 ease-in-out hover:translate-x-2">
        <h4 className="text-[#e58411] font-lexend">More Info</h4>{" "}
        <EastIcon className="text-[#e58411]" />
      </div>
    </div>
  );
};

export default BestSelling;
