import React from "react";

 const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center">
            <p className="text-lg font-bold text-blue-700 ">Amrinder Singh</p>
            <p className="mb-4  text-gray-800">Product Manager</p>
            <p className="text-lg tracking-wide text-gray-800 text-center">
                      Amazing team player with a passion for creating innovative products.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center ">
            <p className="text-lg font-bold text-blue-600">Sahil singh</p>
            <p className="mb-4  text-gray-700">Design Team Lead</p>
            <p className="text-lg tracking-wide text-gray-800 text-center">
              Secondary fermentation degrees plato units of bitterness, cask

            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center ">
            <p className="text-lg font-bold text-blue-600">Mahinder singh</p>
            <p className="mb-4  text-gray-700">Design Team Lead</p>
            <p className="text-lg tracking-wide text-gray-800 text-center">
              Secondary fermentation degrees plato units of bitterness, cask

            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center ">
            <p className="text-lg font-bold text-blue-600">Mahinder singh</p>
            <p className="mb-4  text-gray-700">Design Team Lead</p>
            <p className="text-lg tracking-wide text-gray-800 text-center">
              Secondary fermentation degrees plato units of bitterness, cask

            </p>
          </div>
        </div>
       

      </div>
    </div>
  );
};

export default Team;