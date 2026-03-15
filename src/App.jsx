import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";
import WatchedMoviesList from "./components/WatchedMoviesList";
import WatchBox from "./components/WatchBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import Errorr from "./components/Error";
import SelectedMovie from "./components/SekectedMovie";


import NumResults from './components/NumResults'
import Box from "./components/ListBox";
import Loader from "./components/Loader";

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

const API = "c81cafe6";

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId(selectedId => selectedId === id ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }


  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=${API}&s=interstellar`).then(res => res.json()).then(data => setMovies(data.Search));
  // },[])

  // console.log(movies);

  useEffect(function() {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API}&s=${query}`);

        if(!response.ok) throw new Error("Fetching Failed.");
        const data = await response.json();


        if(data.Response === "False") throw new Error("Movie not found.");
        setMovies(data.Search);
      } catch (err) {
        setErrorMessage(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    if(query.length < 3){
      setMovies([]);
      setErrorMessage('');
      return;
    }
    fetchMovies();
  }, [query]);


  return (
    <>
      {/* <Nav  movies={movies} /> */}
      <Nav>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Nav>
      {/* <Main movies={movies} tempMovieData={tempMovieData} tempWatchedData={tempWatchedData}  average={average}/> */}
      <Main>
        <Box>
          {isLoading && <Loader />}
          {errorMessage && <Errorr message={errorMessage} />}
          {!isLoading && !errorMessage  && <MovieList movies={movies} tempMovieData={tempMovieData} onSelectMovie={handleSelectMovie} onCloseMovie={handleCloseMovie}/>}
        </Box>
        <Box>
         {selectedId ? <SelectedMovie selectedId={selectedId} onCloseMovie={handleCloseMovie} /> :
          <>
            <WatchedSummary watched={watched} average={average} />
            <WatchedMoviesList watched={watched}/>
          </>}
        </Box>
      </Main>
    </>
  );
}
