import React from "react";
import ProductFrame from "./ProductFrame";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

interface ProductDatas {
  id: number;
  image: string;
  category: string;
  title: string;
  rating: number;
  price: number;
}

const Products: React.FC = () => {
  const products: ProductDatas[] = [
    {
      id: 1,
      image: "/assets/product (1).png",
      category: "Chair",
      title: "Sakarias Armchair",
      rating: 3,
      price: 342,
    },
    {
      id: 2,
      image: "/assets/product (2).png",
      category: "Chair",
      title: "Baltsar Chair",
      rating: 5,
      price: 534,
    },
    {
      id: 3,
      image: "/assets/product (3).png",
      category: "Chair",
      title: "Anjay Chair",
      rating: 2,
      price: 459,
    },
    {
      id: 4,
      image: "/assets/product (4).png",
      category: "Chair",
      title: "Nyantuy Chair",
      rating: 5,
      price: 232,
    },
    {
      id: 5,
      image: "/assets/product (5).png",
      category: "Chair",
      title: "Sofa Chair",
      rating: 4,
      price: 532,
    },
    {
      id: 6,
      image: "/assets/product (6).png",
      category: "Chair",
      title: "Play Chair",
      rating: 2,
      price: 532,
    },
  ];

  return (
    <div className="relative w-full h-auto px-6">
      <div className="absolute left-0 top-52">
        <ArrowCircleLeftIcon className="text-black opacity-60 cursor-pointer text-[2.4rem]" />
      </div>
      <div className="flex justify-around gap-2 no-scrollbar overflow-x-auto w-full h-auto">
        {products.map((product) => (
          <ProductFrame key={product.id} product={product} />
        ))}
      </div>
      <div className="absolute right-0 top-52">
        <ArrowCircleRightIcon className="text-black opacity-60 cursor-pointer text-[2.4rem]" />
      </div>
    </div>
  );
};

export default Products;
