// import { useBreakpointValue } from '@chakra-ui/react';
import React from "react";
import PropTypes from 'prop-types';

const Welcome = ({animate}) => {
    // const isMobile = useBreakpointValue({ base: true, md: false });

    return (
      
        <div className={`transition-all duration-1000 pt-4 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

        <div className="container mx-auto px-16 mt-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center px-2 sm:px-2 md:px-2 lg:px-8">
                        <h1 className="text-4xl md:text-3xl font-bold mb-4 text-blue-700 font-serif pb-4 sm:pb-6 lg:pb-8 text-center lg:-translate-x-12">
                            Welcome to Balaji Agro
                        </h1>

                        <div className="w-full sm:w-[80%]"> {/* Adjust width percentage as needed */}
                            <p className="text-[18px] md:text-lg leading-relaxed text-justify font-serif">
                                Our Company was incorporated as Balaji Agro Tech as a public limited company, under
                                the Companies Act, 1956 vide Certificate of Incorporation dated
                                July 31, 2008. Our Company is in the business of processing of
                                non-basmati and basmati rice in India.
                            </p>
                        </div>
                        <div className="mt-4 w-full sm:w-[80%]"> {/* Adjust width percentage as needed */}
                            <p className="text-[18px] md:text-lg leading-relaxed text-justify font-serif">
                                We are one of the largest processors of non-basmati rice in the
                                State of Jharkhand with a milling capacity of 1500 Metric tons per
                                day, and we market our products across Eastern Indian States, namely
                                Jharkhand, Bihar, Odisha, West Bengal, and Assam.
                            </p>
                        </div>
                    </div>
                    <div className="relative mx-auto overflow-hidden w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="relative z-10 overflow-hidden rounded-[18px] p-[2px] mt-[8px] w-full">
                            <img
                                src="https://images.pexels.com/photos/3345727/pexels-photo-3345727.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Placeholder"
                                className="w-full h-[380px] object-cover object-center transform scale-100 transition-transform duration-300 hover:scale-105"
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
