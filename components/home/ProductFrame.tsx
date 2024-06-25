import React from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface ProductData {
  id: number;
  image: string;
  category: string;
  title: string;
  rating: number;
  price: number;
}

interface ProductFrameProps {
  product: ProductData;
}

const ProductFrame: React.FC<ProductFrameProps> = ({ product }) => {
  return (
    <div className="w-[16rem] h-auto my-5 bg-white pb-6 shrink-0 ">
      <div className="w-full h-auto p-10">
        <Image
          src={product.image}
          width={130}
          height={120}
          className="m-auto"
          alt="products"
        />
      </div>
      <div className="flex p-4 flex-col gap-2">
        <h5 className="font-lexend font-light text-gray-500">
          {product.category}
        </h5>
        <h4 className="font-lexend font-medium text-[1.3rem] ">
          {product.title}
        </h4>
        <div>
          <Rating name="half-rating" defaultValue={5} precision={0.5} />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-center font-semibold text-[1.1rem]">
            <span className="text-[.9rem]">$</span>
            <span> {product.price}</span>
          </div>
          <AddCircleIcon className="text-[#0d1b39] text-[1.8rem]" />
        </div>
      </div>
    </div>
  );
};

export default ProductFrame;
