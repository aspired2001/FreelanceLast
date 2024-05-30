import React from "react";
import Counter from "../utilities/Counter";

const cardData = [
    {
        imageSrc: "assets/infra.png",
        title: "DIRECT EMPLOYEES",
        count: 400,
        suffix: "+",
    },
    {
        imageSrc: "assets/infra1.png",
        title: "INDIRECT EMPLOYEES",
        count: 10,
        suffix: "k+",
    },
    {
        imageSrc: "assets/infra2.png",
        title: "FARMER",
        count: 50000,
        suffix: "+",
    },
    {
        imageSrc: "assets/infra3.png",
        title: "DISTRIBUTION NETWORK",
        count: 1,
        suffix: "K+",
    },
    {
        imageSrc: "assets/infra4.png",
        title: "CUSTOMERS",
        count: 5,
        suffix: " Lakhs+",
    },
];

const Infrastructure = () => {
    return (
        <div className="flex flex-col items-center justify-around mt-14">
            <div className="text-center font-serif text-blue-700 ">
                <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">Infrastructure</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 justify-around font-semibold text-blue-600">
                {cardData.map((card, index) => (
                    <div key={index} className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                        <div className="bg-white rounded-lg p-4">
                            <img src={card.imageSrc} alt="Infrastructure" className="w-[14rem] h-44 mb-4" />
                            <div>
                                <span className="block mb-2">{card.title}</span>
                                <h1 className="flex justify-center max-sm:text-2xl text-2xl">
                                    <Counter n={card.count} />{card.suffix}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infrastructure;
