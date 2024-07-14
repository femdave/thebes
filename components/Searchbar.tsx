import React, { ChangeEvent } from "react";

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  handleSearchChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search artists"
      value={searchQuery}
      onChange={handleSearchChange}
      className="mb-6 p-2 rounded-full bg-gray-800 text-white w-full max-w-md"
    />
  );
};

export default SearchBar;
