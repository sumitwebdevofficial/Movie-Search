import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../constants";
import { useParams } from "react-router-dom";
import { Section, Container, Loading, Error, Title, Subtitle, Text, MovieMoreInfoListItem } from "../components/index.js";

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID.trim()}`);
      // console.log(data);
      setLoading(false);
      setMovie(data);
    };
    fetchMovieDetails();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (movie.Response === "False") {
    return <Error errorMsg="No Movie Found" />;
  }
  const posterSrc = movie.Poster === "N/A" ? "/images/fallbackPoster.png" : movie.Poster;

  return (
    <Section>
      <Container>
        <div className="flex flex-col  lg:flex-row gap-10">
          <div className="w-[500px] max-w-full mx-auto shrink-0">
            <img src={posterSrc} alt="" className="w-full" />
          </div>
          <div className="mt-10 lg:mt-0 shrink">
            <Title>{movie.Title}</Title>
            <div className="flex items-center gap-2 mt-2">
              <Text>{movie.Year} |</Text>
              <Text>{movie.Runtime} |</Text>
              <Text>{movie.Rated}</Text>
            </div>

            <ul className="mt-10 flex flex-col gap-10">
              <li>
                <Subtitle>Plot</Subtitle>
                <Text className="mt-1">{movie.Plot}</Text>
              </li>

              <li>
                <Subtitle>Actors</Subtitle>
                <Text className="mt-1">{movie.Actors}</Text>
              </li>

              <li>
                <Subtitle>Country</Subtitle>
                <Text className="mt-1">{movie.Country}</Text>
              </li>
            </ul>

            <li>
              <Subtitle>More Info</Subtitle>

              <ul className="flex flex-col gap-1 mt-2">
                <MovieMoreInfoListItem itemText="Director" itemValue={movie.Director} />
                <MovieMoreInfoListItem itemText="IMDB Rating" itemValue={movie.imdbRating} />
                <MovieMoreInfoListItem itemText="IMDB Votes" itemValue={movie.imdbVotes} />
                <MovieMoreInfoListItem itemText="Box Ofice" itemValue={movie.BoxOffice} />
                <MovieMoreInfoListItem itemText="Metascore" itemValue={movie.Metascore} />
                <MovieMoreInfoListItem itemText="Rated" itemValue={movie.Rated} />
                <MovieMoreInfoListItem itemText="Release Date" itemValue={movie.Released} />
                <MovieMoreInfoListItem itemText="Genre" itemValue={movie.Genre} />
                <MovieMoreInfoListItem itemText="Language" itemValue={movie.Language} />
                <MovieMoreInfoListItem itemText="Awards" itemValue={movie.Awards} />
              </ul>
            </li>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MoviesDetails;
