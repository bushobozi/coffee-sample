"use client";
import Image from "next/image";

interface CustomerFeed {
  id?: number;
  name?: string;
  comment?: string;
  image?: string;
}

const CustomerCard = ({ name, comment, image }: CustomerFeed) => {
  return (
    <div className="relative text-center transition-transform duration-300 p-6 bg-white rounded-[30px] outline-1 -outline-offset-1 outline-[#f5f7f9] flex flex-col justify-center items-center gap-5 hover:scale-105 hover:rotate-[4deg] shadow-[0px_25px_52px_-12px_rgba(17,17,17,0.20)]">
      <Image
        src={image || ""}
        alt={name || ""}
        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
        width={20}
        height={20}
      />
      <div className="space-y-6">
        <h4 className="text-[#323b47] text-xl font-bold leading-tight">
          {name || ""}
        </h4>
        <p className="text-[#58677d] text-lg font-medium leading-snug">
          {comment || ""}
        </p>
      </div>
      <div className="p-3.5 rounded-full outline-1 -outline-offset-1 outline-[#e9eff7] flex justify-center items-center">
        <Image
          src="https://img.icons8.com/?size=100&id=38968&format=png&color=000000"
          alt="quote"
          className="w-6 h-6"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default CustomerCard;
