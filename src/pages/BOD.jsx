import React from "react";
import Footer from "./Footer";
import Team from "./Team";

const BOD = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1561504935-4e7d4516a2d1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpY2V8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="w-full h-[400px] shadow-lg"
                />

                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300">BOD</span>
                </span>
            </div>

            <div className="mt-8 max-w-screen-lg">
                <Team />
            </div>

            <div className="mt-8">
                <Footer />
            </div>
        </div>
    );
}

export default BOD;
