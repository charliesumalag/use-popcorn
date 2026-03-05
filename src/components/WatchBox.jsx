import React, {useState} from 'react';
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";

const WatchBox = ({tempWatchedData, average}) => {
    const [isOpen2, setIsOpen2] = useState(true);
    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)} > {isOpen2 ? "–" : "+"} </button>
            {isOpen2 && (
                <>
                    <WatchedSummary watched={watched} average={average} />
                    <WatchedMoviesList watched={watched}/>
                </>
            )}
        </div>
    )
}

export default WatchBox
