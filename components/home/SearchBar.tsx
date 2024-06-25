import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex justify-end w-[45%] items-center relative rounded-3xl h-10 bg-[#464849] border border-[#ffffffcc] overflow-hidden">
      <input
        spellCheck={false}
        type="text"
        className="w-full absolute top-0 left-0 right-0 bg-inherit h-full outline-none px-4 pr-10 text-white font-lexend font-light"
        placeholder="Search Furniture"
      />
      <div className="flex justify-center items-center h-8 w-8 z-20 mr-1 rounded-full bg-[#e58411]">
        <SearchIcon className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
