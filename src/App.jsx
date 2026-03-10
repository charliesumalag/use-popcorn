import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";
import WatchedMoviesList from "./components/WatchedMoviesList";
import WatchBox from "./components/WatchBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";


import NumResults from './components/NumResults'
import Box from "./components/ListBox";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const API = "f84fc31d";

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=${API}&s=interstellar`).then(res => res.json()).then(data => setMovies(data.Search));
  // },[])

  // console.log(movies);

  useEffect(function() {
    async function fetchMovies() {
      setIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API}&s=interstellar`);
      const data = await response.json();
      setMovies(data.Search);

      setIsLoading(false);
    }

    fetchMovies();
  }, []);




  return (
    <>
      {/* <Nav  movies={movies} /> */}
      <Nav>
        <Search />
        <NumResults movies={movies} />
      </Nav>
      {/* <Main movies={movies} tempMovieData={tempMovieData} tempWatchedData={tempWatchedData}  average={average}/> */}
      <Main>
        <Box>
          {isLoading ? <p className="loader">Loading ....</p>  :   <MovieList movies={movies} tempMovieData={tempMovieData} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} average={average} />
          <WatchedMoviesList watched={watched}/>
        </Box>
      </Main>
    </>
  );
}
