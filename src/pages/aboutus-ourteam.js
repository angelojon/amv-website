import React from "react";

const OurTeam = () => (
  <div className="mx-auto py-8 pt-20">
    <div className="px-8 py-24 mb-8 flex justify-center items-center">
      <div className="text-center">
        <p className="inter tracking-widest text-gray-700 font-medium text-xs">
          OUR TEAM
        </p>
        <p className="playfair text-3xl w-full text-wrap text-center mt-4">
          Discover the faces fueling creativity and excellence at AMV Events.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center space-y-8 mb-32 px-4 sm:px-8">
      <div className=" flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0 w-full justify-center">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 1"
          className="w-full sm:w-64 h-64 object-cover" // Adjusted size
        />
        <div className="flex flex-col w-full sm:max-w-md">
          <p className="playfair text-xl font-semibold text-center sm:text-left">
            Abegail Ventura
          </p>
          <p className="playfair text-sm italic text-gray-700 font-medium text-center sm:text-left">
            Chief Executive Officer
          </p>
          <p className="inter text-sm text-gray-600 mt-2 text-center sm:text-left overflow-wrap break-words">
            Meet our visionary CEO at AMV Events, driving innovation and
            excellence in every celebration. With a keen eye for detail and a
            passion for creating unforgettable experiences, our CEO leads our
            team with inspiration and dedication, ensuring each event surpasses
            expectations.
          </p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0 w-full justify-center">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 2"
          className="w-full sm:w-64 h-64 object-cover" // Adjusted size
        />
        <div className="flex flex-col w-full sm:max-w-md">
          <p className="playfair text-xl font-semibold text-center sm:text-left">
            Ronn Amiel Magat
          </p>
          <p className="playfair text-sm italic text-gray-700 font-medium text-center sm:text-left">
            Malakas mag Bball
          </p>
          <p className="inter text-sm text-gray-600 mt-2 text-center sm:text-left overflow-wrap break-words">
            Meet our visionary CEO at AMV Events, driving innovation and
            excellence in every celebration. With a keen eye for detail and a
            passion for creating unforgettable experiences, our CEO leads our
            team with inspiration and dedication, ensuring each event surpasses
            expectations.
          </p>
        </div>
      </div>
      <div className="mb-40 flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0 w-full justify-center">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 3"
          className="w-full sm:w-64 h-64 object-cover" // Adjusted size
        />
        <div className="flex flex-col w-full sm:max-w-md">
          <p className="playfair text-xl font-semibold text-center sm:text-left">
            Jon Angelo Macaldo
          </p>
          <p className="playfair text-sm italic text-gray-700 font-medium text-center sm:text-left">
            Taga cheer
          </p>
          <p className="inter text-sm text-gray-600 mt-2 text-center sm:text-left overflow-wrap break-words">
            Meet our visionary CEO at AMV Events, driving innovation and
            excellence in every celebration. With a keen eye for detail and a
            passion for creating unforgettable experiences, our CEO leads our
            team with inspiration and dedication, ensuring each event surpasses
            expectations.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default OurTeam;
