import React from "react";

 const Team = () => {
  return (
    <div className=" mx-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-16 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="assets/profile.PNG"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center">
            <p className="text-lg font-bold text-blue-700 text-center">Mr. Rameshwar Prasad Sahu</p>
            <p className="mb-4  text-gray-800">Owner</p>

          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="assets/profile1.jpeg"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center ">
            <p className="text-lg font-bold text-blue-600 text-center">Mr. Santosh Kumar Sahu</p>
            <p className="mb-4  text-gray-700">Owner</p>

          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-200 rounded-lg shadow-xl py-[16px] hover:transition-all ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="assets/profile2.PNG.jpeg"
          />
          <div className="flex flex-col justify-center mt-2 font-serif items-center ">
            <p className="text-lg font-bold text-blue-600 text-center">Mr. Shambhu Sahu</p>
            <p className="mb-4  text-gray-700">Owner</p>

          </div>
        </div>
        
       

      </div>
    </div>
  );
};

export default Team;