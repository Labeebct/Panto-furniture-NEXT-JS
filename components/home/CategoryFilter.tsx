import React from "react";

const CategoryFilter = () => {
  const categories: string[] = ["Chair", "Beds", "Sofa", "Lamp"];

  return (
    <div className="flex relative justify-between items-center px-4 w-80 h-14 bg-[#eeeeee] rounded-full">
      {categories.map((data, index) => (
        <div
          className="flex-1 z-20 cursor-pointer m-auto px-4 font-lexend  text-gray-500"
          key={index}
        >
          {data}
        </div>
      ))}
      <div className="absolute flex justify-center bg-white w-[70px] h-10 rounded-full z-10 px-5"></div>
    </div>
  );
};

export default CategoryFilter;
