import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";

interface ClientDataTypes {
  id: number;
  bg: string;
  profile: string;
  title: string;
  name: string;
  discription: string;
}

interface ClientFrameProps {
  client: ClientDataTypes;
}

const ClientFrame: React.FC<ClientFrameProps> = ({ client }) => {
  return (
    <div className="relative flex justify-center items-end px-6 w-[25.4rem] h-[36rem] rounded-2xl shadow-md overflow-hidden">
         <Image
            src={client.bg}
            width={640}
            height={400}
            alt="clientProfile"
            className="object-fill w-full h-full absolute"
          />
      <div className="relative flex flex-col gap-2 items-center pb-4 mb-5 w-full h-[290px] bg-white rounded-xl">
        <div className="flex justify-center flex-col items-center overflow-hidden absolute w-[84px] h-20 -top-7 ring-[1.1rem] ring-white rounded-full bg-slate-600">
          <Image
            src={client.profile}
            width={500}
            height={400}
            alt="clientProfile"
            className="object-fill w-full h-[300px]"
          />
        </div>
        <h3 className="mt-16 font-lexend font-semibold text-[1.1rem]">
          {client.title}
        </h3>
        <h3 className="font-lexend font-light text-[1rem] text-gray-600">
          {client.name}
        </h3>
        <p className="text-center my-6 px-6 font-lexend font-light text-gray-700">
          {client.discription}
        </p>
        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
      </div>
    </div>
  );
};

export default ClientFrame;
