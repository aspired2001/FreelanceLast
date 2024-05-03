import React from "react";

const Team = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="assets/profile.PNG"
          alt="Person"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mr. Rameshwar Prasad Sahu</h2>
          <p className="text-sm text-gray-600">Ownership: Owner</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="assets/profile1.jpeg"
          alt="Person"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mr. Santosh Kumar Sahu</h2>
          <p className="text-sm text-gray-600">Ownership: Owner</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="assets/profile2.PNG.jpeg"
          alt="Person"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mr. Shambhu Sahu</h2>
          <p className="text-sm text-gray-600">Ownership: Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
