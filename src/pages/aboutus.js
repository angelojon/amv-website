import React from "react";

const About = () => (
  <div className="mx-auto py-8 pt-20">
    {/* Removed container */}
    <div className="bg-pink-200 px-8 py-24 mb-8 flex justify-center items-center">
      <div className="text-center">
        {/* Wrapping paragraphs inside a div */}
        <p className="inter tracking-widest text-gray-700 font-medium text-xs">
          OUR TEAM
        </p>
        <p className="playfair  text-3xl w-full text-wrap text-center mt-4">
          Discover the faces fueling creativity and excellence at AMV Events.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center space-y-8">
      <div className="flex items-center space-x-8">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 1"
          className="w-32 h-32 object-cover rounded-full"
        />
        <p className="text-lg">Member 1 - Position</p>
      </div>
      <div className="flex items-center space-x-8">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 2"
          className="w-32 h-32 object-cover rounded-full"
        />
        <p className="text-lg">Member 2 - Position</p>
      </div>
      <div className="flex items-center space-x-8">
        <img
          src="/photos/pexels-wendy-wei-1190297.jpg"
          alt="Member 3"
          className="w-32 h-32 object-cover rounded-full"
        />
        <p className="text-lg">Member 3 - Position</p>
      </div>
    </div>
  </div>
);

export default About;
