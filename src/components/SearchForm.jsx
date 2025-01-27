import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ placeholder = "", className = "", children }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/movies?search_query=${searchInput.trim()}`);
      setSearchInput("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className={`border-none outline-none inline-block rounded-full font-normal text-stone-950 ${className}`}
      />
    </form>
  );
};

export default SearchForm;
