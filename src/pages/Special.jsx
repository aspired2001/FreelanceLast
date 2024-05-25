import React from "react";


const Special = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-8 px-4">
                <h1 className="font-serif text-center text-blue-700 text-2xl md:text-4xl lg:text-5xl xl:text-4xl font-bold">
                    WHAT MAKES US SPECIAL?
                </h1>
                <span className="font-serif text-blue-600 text-[17px] text-center mt-3">
                    you can be proud of the rice you cook & bake with.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 justify-around font-semibold text-blue-600">
                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">The Best Milling Equipment</span>
                        <img
                            src="assets/Satakes.jpg"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[80px] max-w-[300px] mb-24 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            We use Satake, the world’s leading rice milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">The Expert Professionals</span>
                        <img
                            src="assets/spec1.png"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[90px] max-w-[300px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            Our team includes the expert professionals qualified from worlds’ best food technology institution.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">Safe & Hygiene</span>
                        <img
                            src="assets/spec2.png"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[90px] max-w-[300px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            We follows HACCP standards to ensures safe & hygiene through- out our process.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">Zero Additives</span>
                        <img
                            src="assets/spec3.png"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[90px] max-w-[300px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            We do not use any additives and can proudly says our products are zero additives to keep your health safety.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">Quality</span>
                        <img
                            src="assets/spec4.png"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[90px] max-w-[300px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            We produce best quality rice as per the benchmark and quality standards set by FSSAI and needs of our customers.

                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">Consistency & Freshness</span>
                        <img
                            src="assets/Roti.jpg"
                            alt="Infrastructure"
                            className="mx-auto w-full h-[125px] max-w-[270px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 max-sm:text-[16px] text-[18px] font-medium font-serif text-blue-500">
                            We plan in a way that our customers get consistent quality products with recent date of manufacturing to have more freshness.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Special;
