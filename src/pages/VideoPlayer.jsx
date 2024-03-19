// src/components/VideoPlayer.js
import React from "react";
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause } from 'lucide-react';

const VideoPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    // const handleSeekChange = (e) => {
    //     const seekTo = parseFloat(e.target.value);
    //     playerRef.current.seekTo(seekTo);
    // };



    return (
        <div className="relative h-full flex items-center justify-center ">
            <ReactPlayer
                ref={playerRef}
                url="https://player.vimeo.com/progressive_redirect/playback/392930074/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=1a9d981e90f90dbd0976937a414c0382c1c4a2db9ab7268dc45e2535989942e1" // Replace with your video URL
                width="100%"
                height="100%"
                playing={playing}
                controls={false}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
                <div className="flex items-center justify-center">
                    <button
                        onClick={handlePlayPause}
                        className="text-white font-bold text-4xl font-serif"

                    >
                        {playing ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
