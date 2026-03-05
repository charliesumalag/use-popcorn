import React, {useState} from 'react'
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

const Main = ({tempMovieData, tempWatchedData, average, movies}) => {

    return (
        <main className="main">
            <ListBox tempMovieData={tempMovieData} movies={movies} />
            <WatchBox tempWatchedData={tempWatchedData} average={average} />
        </main>
    )
}

export default Main
