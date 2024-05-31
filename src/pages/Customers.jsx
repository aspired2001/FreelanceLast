
import React from "react";
import { Network } from 'lucide-react';

import  { useState, useEffect } from 'react';

const Customers = () => {
    const [counter, setCounter] = useState(0);
    const [count,setCount]=useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : prevCounter));
        }, 50); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevsCounter) => (prevsCounter < 1000 ? prevsCounter + 1 : prevsCounter));
        }, 50); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col  lg:h-[360px] pb-3 pr-2 mt-14  items-center bg-[#1e3a8a] rounded-sm " >
            <h1 className="text-white text-center  text-2xl md:text-2xl lg:text-2xl xl:text-3xl  font-serif font-bold pt-4 " >Customers & Networks</h1>
            <div className="mt-4">
                <h2 className="text-white max-sm:text-xl text-2xl font-serif font-bold">distribution Network</h2>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-[30px] ">
                <div className="flex flex-col items-center  p-4 rounded">

                    <div className="  w-[100px] h-[100px] bg-white rounded-full  ">
                        <div className="translate-x-6 translate-y-6">
                        <Network size={48} color="#000000" strokeWidth={2.75} />
                        </div>
                    </div>
                    <span className="text-white max-sm:text-[16px] text-center font-serif mt-2 text-lg pt-4" >We have a huge distribution channel for our wide range of products.</span>
                </div>
              

                    <div className="flex flex-col items-center  p-4 rounded">
                    <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                            <span className="text-black text-center font-serif font-semibold text-[20px]">{counter}+</span>
                        </div>
                    <span className="text-white max-sm:text-[16px] text-center font-serif mt-2 text-lg pt-4">
                            We supply to over 100+ dealers/distributors/wholesalers/large retailers everyday.
                        </span>
                    </div>
                <div className="flex flex-col items-center  p-4 rounded">
                    <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
                        <span className="text-black text-center font-serif
                        font-semibold text-[20px]">{count}+</span>
                    </div>
                    <span className="text-white max-sm:text-[16px] text-center font-serif mt-2 text-lg pt-4">
                        We sale our products to more than 1000+ stores/shopping marts everyday. 
                    </span>
                </div>

            </section>

        </div>
    )
}

export default Customers