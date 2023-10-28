import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const DeezerPlayer = () => {
    const [trackId, setTrackId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (trackId) => {
        setTrackId(trackId);
        setIsPlaying(true);
    };

    return (
        <div>
            <h1>Deezer Track Player</h1>
            <div>
                <button onClick={() => playTrack(1)}>Play Track 1</button>
                <button onClick={() => playTrack(2)}>Play Track 2</button>
                <button onClick={() => playTrack(3)}>Play Track 3</button>
            </div>
            {trackId && (
                <ReactPlayer
                    url={`https://www.deezer.com/track/${trackId}`}
                    playing={isPlaying}
                    controls
                />
            )}
        </div>
    );
};

export default DeezerPlayer;
