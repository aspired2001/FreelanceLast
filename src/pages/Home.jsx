import React from "react";

import { useState, useEffect } from 'react';
import Customers from "./Customers";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Infrastructure from "./Infrastructure";
// import Products from "./Products";
import Special from "./Special";
// import VedioSection from "./VedioSection";
import Welcome from "./Welcome";

const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Set animationComplete to true after a delay to simulate animation duration
        const timeoutId = setTimeout(() => {
            setAnimationComplete(true);
        }, 80); // Adjust the delay to match the animation duration

        return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
    }, []);

    return (
        <div className="mt-[100px] overflow-hidden">
            <Gallery animate={animationComplete} />
            <Welcome animate={animationComplete} />
         
            
            <Customers animate={animationComplete} />
            <Infrastructure animate={animationComplete} />
            <Special animate={animationComplete} />
            <Footer animate={animationComplete} />
        </div>
    );
}

export default Home;
