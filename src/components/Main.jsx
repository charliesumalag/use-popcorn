import React, {useState} from 'react'
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

const Main = ({tempMovieData, tempWatchedData, average}) => {

    return (
        <main className="main">
            <ListBox tempMovieData={tempMovieData} />
            <WatchBox tempWatchedData={tempWatchedData} average={average} />
        </main>
    )
}

export default Main
