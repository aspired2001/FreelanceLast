
import React from "react";

import  { useState, useEffect } from 'react';

const Customers = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : prevCounter));
        }, 50); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col lg:h-[500px] pb-3 pr-2 mt-8  items-center bg-[#1e3a8a] rounded-sm " >
            <h1 className="text-white text-center  text-4xl font-serif font-bold pt-4 " >Customers & Networks</h1>
            <div className="mt-4">
                <h2 className="text-white  text-2xl font-serif font-bold">distribution Network</h2>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[50px] px-[30px] ">
                <div className="flex flex-col items-center  p-4 rounded">

                    <div className="  w-[100px] h-[100px] bg-white rounded-full ">

                    </div>
                    <span className="text-white text-center font-serif mt-2 text-lg pt-4" >We have a huge distribution channel for our wide range of products</span>
                </div>
              

                    <div className="flex flex-col items-center  p-4 rounded">
                    <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                            <span className="text-black text-center font-serif font-semibold text-[20px]">{counter}+</span>
                        </div>
                        <span className="text-white text-center font-serif mt-2 text-lg pt-4">
                            We have a huge distribution channel for our wide range of products
                        </span>
                    </div>
                <div className="flex flex-col items-center  p-4 rounded">
                    <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                        <span className="text-black text-center font-serif
                        font-semibold text-[20px]">{counter}+</span>
                    </div>
                    <span className="text-white text-center font-serif mt-2 text-lg pt-4">
                        We have a huge distribution channel for our wide range of products
                    </span>
                </div>

            </section>

        </div>
    )
}

export default Customers