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
        <div className="relative h-[33rem]  flex items-center justify-center ">
            <ReactPlayer
                ref={playerRef}
                url="assets/BalajiReel.mp4" // Replace with your video URL
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
