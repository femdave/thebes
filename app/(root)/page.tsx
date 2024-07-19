import Image from "next/image";
import React from "react";
import artist from "../../public/WhatsApp Image 2024-07-10 at 10.53.03_b929e2a0.jpg";
import Link from "next/link";

const MusicSelection: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-16 overflow-y-hidden">
      <h1 className="text-white text-3xl">Thebes</h1>
      <div className="flex flex-col mt-10">
        <Link href="/artist-selection">
          <div className=" text-white p-6 h-30 w-30 my-5 rounded-lg text-center border-s-gray-500 border">
            Artist Selection UI
          </div>
        </Link>
        <Link href="/chat">
          <div className=" text-white p-6 h-30 w-30 my-5 rounded-lg text-center border-s-gray-500 border">
            Chat UI
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MusicSelection;
