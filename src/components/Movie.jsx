import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ Title, Year, Type, Poster, imdbID }) => {
  const posterSrc = Poster === "N/A" ? "/images/fallbackPoster.png" : Poster;
  return (
    <Link to={`/movies/${imdbID}`} className="block">
      <div className="bg-stone-800 rounded-lg overflow-hidden shadow-lg relative hover:shadow-2xl transition duration-300 ease-in-out">
        <img src={posterSrc} alt={`${Title} Poster`} className="w-full" />
        <div className="p-2 md:py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">{Title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">{Year},</span>
            <span className="text-base font-semibold text-white">{Type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
