import React from "react";
import SearchForm from "./SearchForm";
import { useLocation, Link } from "react-router-dom";

// py-2 px-2 md:px-4 lg:px-8
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-stone-900 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-green-400 text-3xl md:text-5xl font-bold">
          Movies
        </Link>
        {location.pathname !== "/" && <SearchForm placeholder="Search here..." className="text-base sm:text-lg md:text-xl py-1 px-3 md:py-2 md:px-6" />}
      </div>
    </nav>
  );
};

export default Navbar;
