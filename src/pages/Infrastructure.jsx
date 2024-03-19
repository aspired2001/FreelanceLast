import React from "react";
import Counter from "../utilities/Counter";

const Infrastructure = () => {
    return (
        <div className="flex flex-col items-center justify-around mt-8">
            <div className="text-center font-serif text-blue-700 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold">Infrastructure</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 justify-around font-semibold text-blue-600">
                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <img src="assets/infra.png" alt="Infrastructure" className="w-full h-auto mb-4" />
                        <div>
                            <span className="block mb-2">DIRECT EMPLOYEES</span>
                            <span className="flex justify-center text-3xl"><Counter n={100} />+</span>
                        </div>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <img src="assets/infra1.png" alt="Infrastructure" className="w-full h-auto mb-4" />
                        <div>
                            <span className="block mb-2">INDIRECT EMPLOYEES</span>
                            <span className="flex justify-center text-3xl"><Counter n={60} />+</span>
                        </div>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <img src="assets/infra2.png" alt="Infrastructure" className="w-full h-auto mb-4" />
                        <div>
                            <span className="block mb-2">FARMER</span>
                            <span className="flex justify-center text-3xl"><Counter n={125} />+</span>
                        </div>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <img src="assets/infra3.png" alt="Infrastructure" className="w-full h-auto mb-4" />
                        <div>
                            <span className="block mb-2">DISTRIBUTION NETWORK</span>
                            <span className="flex justify-center text-3xl"><Counter n={223} />+</span>
                        </div>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <img src="assets/infra4.png" alt="Infrastructure" className="w-full h-auto mb-4 " />
                        <div>
                            <span className="block mb-2">CUSTOMERS</span>
                            <span className="flex justify-center text-3xl"><Counter n={550} />+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
