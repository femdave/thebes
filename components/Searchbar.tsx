import React, { ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  placeholder: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  handleSearchChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchQuery}
      onChange={handleSearchChange}
      className="mb-6 py-2 px-3 rounded-full bg-gray-800 text-white w-full max-w-md"
    />
  );
};

export default SearchBar;
