// src/components/YourComponent.js
import React from "react";
import VideoPlayer from './VideoPlayer'; // Assuming you have a VideoPlayer component

const YourComponent = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 mt-8">
            <div className="text-left pl-4 md:pl-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-800 pb-4 md:pb-8 
                text-center
                pt-16 
                ">
                    Let&apos;s have a virtual experience
                </h1>
                
            </div>

            <div className="rounded-lg overflow-hidden ">
                <VideoPlayer />
            </div>
        </section>
    );

};

export default YourComponent;
