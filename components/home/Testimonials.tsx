import React from "react";
import ClientFrame from "./ClientFrame";

interface clientDataTypes {
  id: number;
  bg: string;
  profile: string;
  title: string;
  name: string;
  discription: string;
}

const Testimonials: React.FC = () => {
  const clientDatas: clientDataTypes[] = [
    {
      id: 1,
      bg: "/assets/client (1).webp",
      profile: "/assets/cpp (1).jpg",
      title: "Bang Upin",
      name: "Pedagang Asongan",
      discription: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
    },
    {
      id: 2,
      bg: "/assets/client (2).webp",
      profile: "/assets/cpp (2).jpg",
      title: "Ibuk Sukijan",
      name: "Ibu Rumah Tangga",
      discription: "“Makasih Panto, apartment karena barang-barang yang terlihat mewah“",
    },
    {
      id: 3,
      bg: "/assets/client (4).png",
      profile: "/assets/cpp (3).jpg",
      title: "Mpok Ina",
      name: "Karyawan Swasta",
      discription: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 mt-14 items-center justify-around h-auto">
      <h4 className="text-[#e58411] font-lexend uppercase">TESTIMONIALS</h4>
      <h3 className="text-[2rem] font-medium font-lexend">
        Our Client Reviews
      </h3>
      <div className="relative w-full h-auto px-10">
        <div className="flex gap-2 justify-around no-scrollbar overflow-x-auto w-full h-auto">
          {clientDatas.map((data) => (
            <ClientFrame key={data.id} client={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
