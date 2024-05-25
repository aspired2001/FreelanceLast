// src/components/YourComponent.js
import React from "react";
import VideoPlayer from './VideoPlayer'; // Assuming you have a VideoPlayer component

const YourComponent = () => {
    return (
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 mt-8">
            <div className="text-left pl-4 md:pl-0 ">
                <h1 className="text-4xl max-sm:text-2xl md:text-xl lg:text-3xl xl:text-[2.25rem] font-serif font-bold text-blue-800 max-sm:pb-4 md:pb-8 
                text-center  lg:
                ">
                    Let&apos;s have a virtual experience
                </h1>
                
            </div>

            <div className="rounded-lg overflow-hidden xl:px-6">
                <VideoPlayer />
            </div>
        </section>
    );

};

export default YourComponent;
