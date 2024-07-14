import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface ArtistCardProps {
  artist: {
    name: string;
    img: string;
  };
  isSelected: boolean;
  toggleSelection: (artistName: string) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  artist,
  isSelected,
  toggleSelection,
}) => {
  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onClick={() => toggleSelection(artist.name)}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden relative">
        <Image
          src={artist.img}
          alt={artist.name}
          width={96}
          height={96}
          className={`object-cover transition-opacity duration-300 ${
            isSelected ? "opacity-50" : "opacity-100"
          }`}
        />
        {isSelected && (
          <FaCheckCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
        )}
      </div>
      <p>{artist.name}</p>
    </div>
  );
};

export default ArtistCard;
