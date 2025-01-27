import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../constants";
import { useSearchParams } from "react-router-dom";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Section from "../components/Section";
import Container from "../components/Container";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery ? searchQuery : ""}`);
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
    return <Loading></Loading>;
  }

  if (!movies.length) {
    return <Error errorMsg="Oops, No Movies Found"></Error>;
  }
  return (
    <Section>
      <Container>
        <div className="movies grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
          {movies.map((movie) => {
            return <Movie {...movie} key={movie.imdbID} />;
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Movies;
