import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../constants";
import { useSearchParams } from "react-router-dom";
import { Section, Container, Loading, Error, MovieCard } from "../components/index";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery ? searchQuery : ""}`);
      setLoading(false);
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  if (!movies.length) {
    return <Error errorMsg="Oops, No Movies Found" />;
  }
  return (
    <Section>
      <Container>
        <div className="movies grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
          {movies.map((movie) => {
            return <MovieCard {...movie} key={movie.imdbID} />;
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Movies;
