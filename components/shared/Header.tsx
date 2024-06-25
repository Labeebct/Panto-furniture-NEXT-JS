import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Header = () => {
  return (
    <nav className="flex text-white absolute top-0 right-0 left-0 justify-between px-10 w-full h-20">
      <div className="flex-2 m-auto">
        <h2 className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.7rem] cursor-pointer font-lexend font-[500]">
          Panto
        </h2>
      </div>
      <div className="m-auto flex-1">
        <ul className="flex md:gap-16 sm:gap-10 gap-4 justify-center">
          <li className="font-lexend text-[.9rem] md:text-[1rem] font-[300] cursor-pointer">
            Furniture
          </li>
          <li className="font-lexend text-[.9rem] md:text-[1rem] font-[300] cursor-pointer">
            Shop
          </li>
          <li className="font-lexend text-[.9rem] md:text-[1rem] font-[300] cursor-pointer">
            About Us
          </li>
          <li className="font-lexend text-[.9rem] md:text-[1rem] font-[300] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex justify-end flex-2 m-auto">
        <span className="cursor-pointer relative">
          <ShoppingBagIcon />
          <div className="absolute -top-1 text-[.9rem] left-3 flex justify-center items-center h-4 w-4 z-20 mr-1 rounded-full bg-[#e58411]">
            0
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Header;
