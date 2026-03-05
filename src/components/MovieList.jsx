import React, {useState} from 'react'
import Movie from "./Movie";

const MovieList = ({tempMovieData}) => {
    const [movies, setMovies] = useState(tempMovieData);
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    )
}

export default MovieList
