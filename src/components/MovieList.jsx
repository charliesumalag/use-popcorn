import React, {useState} from 'react'
import Movie from "./Movie";

const MovieList = ({onSelectMovie, movies, onCloseMovie}) => {

    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
            ))}
        </ul>
    )
}

export default MovieList
