// import { useBreakpointValue } from '@chakra-ui/react';
import React from "react";
import PropTypes from 'prop-types';

const Welcome = ({animate}) => {
    // const isMobile = useBreakpointValue({ base: true, md: false });

    return (
      
        <div className={`transition-all duration-1000 pt-4 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

        <div className="  container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className=" flex flex-col justify-center px-2 sm:px-2 md:px-2 lg:px-8">
                        <h1 className="text-2xl  md:text-xl lg:text-2xl xl:text-[2rem] font-bold mb-4 text-blue-700 font-serif pb-4 sm:pb-2 lg:ml-14 lg:pb-8 text-center lg:-translate-x-12">
                            <span className="inline-block max-w-[90%]  sm:max-w-[80%] md:max-w-[70%] lg:max-w-[100%] xl:max-w-[90%]">
                                Welcome to Balaji Agrotech Industries
                            </span>
                        </h1>
                        
                        <div className="w-full sm:w-[80%] md:w-[100%]"> {/* Adjust width percentage as needed */}
                            <p className=" max-sm:text-[16px] text-[18px] max-sm:px-4 md:text-lg leading-relaxed text-justify font-serif">
                                Our Company was incorporated as Balaji Agrotech Industries in the year 2010. Our Company is in the business of processing of
                                non-basmati and basmati rice in India.
                            </p>
                        </div>
                        <div className="mt-2 w-full sm:w-[80%] md:w-[100%]"> {/* Adjust width percentage as needed */}
                            <p className=" max-sm:text-[16px]  text-[18px] md:text-lg leading-relaxed text-justify font-serif max-sm:px-4">
                                We are one of the largest processors of non-basmati rice in the
                                State of Jharkhand with a milling capacity of 1000 Metric tons per day, and we market our products across Eastern Indian States, namely
                                Jharkhand, Bihar, Odisha, West Bengal, Delhi, Rajasthan, few parts of Southern India and Assam.
                            </p>
                        </div>
                    </div>
                    <div className="relative mx-auto overflow-hidden w-full md:max-w-md lg:max-w-lg xl:max-w-xl my-8">
                        <div className="relative z-10 overflow-hidden rounded-[18px] p-[2px] mt-[8px] w-full max-sm:px-4">
                            <img
                                src="https://images.pexels.com/photos/3345727/pexels-photo-3345727.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Placeholder"
                                className="w-full h-[340px] object-cover object-center transform scale-100 transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

Welcome.propTypes = {
    animate: PropTypes.bool.isRequired,
};



export default Welcome;
