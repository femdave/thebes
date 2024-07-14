"use client";
import React, { useState, ChangeEvent } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import wizkid from "./../public/wizkid.jpeg";
import black from "./../public/6lack.jpeg";
import asake from "./../public/asake.jpeg";
import ayomaff from "./../public/ayomaff.jpeg";
import burna from "./../public/burna.jpeg";
import davido from "./../public/davido.jpeg";
import jcole from "./../public/jscole.jpg";
import kendrick from "./../public/kendrick.jpeg";
import rema from "./../public/rema.jpeg";
import simi from "./../public/simi.jpeg";
import jon from "./../public/jon.jpeg";
import bazzi from "./../public/bazzi.jpeg";
import SearchBar from "@/components/Searchbar";
import ArtistCard from "@/components/ArtistCard";

interface Artist {
  name: string;
  img: any;
}

const artistsData: Artist[] = [
  { name: "6lack", img: black },
  { name: "Asake", img: asake },
  { name: "Ayo Maff", img: ayomaff },
  { name: "Bazzi", img: bazzi },
  { name: "Burna Boy", img: burna },
  { name: "Jon Bellion", img: jon },
  { name: "J Cole", img: jcole },
  { name: "Kendrick Lamar", img: kendrick },
  { name: "Rema", img: rema },
  { name: "Simi", img: simi },
  { name: "Wizkid", img: wizkid },
  { name: "Davido", img: davido },
];

const MusicSelection: React.FC = () => {
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleArtistSelection = (artist: string) => {
    setSelectedArtists((prevSelected) =>
      prevSelected.includes(artist)
        ? prevSelected.filter((a) => a !== artist)
        : prevSelected.length < 5
        ? [...prevSelected, artist]
        : prevSelected
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredArtists = artistsData.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col  min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-extrabold mb-2 text-left">
        Pick 5 artists you like
      </h1>
      <p className="text-gray-400 mb-4 text-xs">
        To get you started, we've included some artists from your YouTube
        history
      </p>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />

      <div className="grid grid-cols-3 gap-4 mb-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.name}
              artist={artist}
              isSelected={selectedArtists.includes(artist.name)}
              toggleSelection={toggleArtistSelection}
            />
          ))
        ) : (
          <p className="text-gray-400 col-span-3">
            The artist you searched for does not exist.
          </p>
        )}
      </div>
      <button
        className={`px-8 py-2 rounded-full font-bold ${
          selectedArtists.length > 0
            ? "bg-white text-black"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
        disabled={selectedArtists.length === 0}
      >
        Done
      </button>
    </div>
  );
};

export default MusicSelection;
