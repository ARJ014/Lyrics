import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search All Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="h-5 w-5 ml-4" onClick={handleSearch} />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
