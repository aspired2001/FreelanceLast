import React from "react";

const CompanySection = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background image */}
            <img
                src="https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt=""
                className="w-full h-[400px] shadow-lg"
            />

            {/* Overlay text */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif  whitespace-nowrap">
                Home &middot; <span className="text-blue-500 hover:text-blue-300 whitespace-nowrap ">Corporate Profile</span>
            </span> 
        </div>
    );
};


export default CompanySection;
