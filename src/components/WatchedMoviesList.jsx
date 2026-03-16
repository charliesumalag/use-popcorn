import React from 'react';
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({watched, onDeleteWatchedMovie}) => {
    return (
        <ul className="list">
            {watched.map((movie) => ( <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatchedMovie={onDeleteWatchedMovie} />  ))}
        </ul>
  )
}

export default WatchedMoviesList
