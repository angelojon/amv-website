import React from "react";

function Homepage() {
  return (
    <div className="bg-red-200">
      <div className="truncate scroll-smooth">
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/photos/pexels-wendy-wei-1190297.jpg')",
          }}
        >
          <h1 className="text-white font-bold text-4xl">Hello</h1>
        </div>

        <div className="min-h-screen w-screen flex flex-col items-center mt-36">
          <div className="flex flex-col items-center">
            <p className="inter tracking-widest text-gray-700 font-medium">
              OUR PROMISE
            </p>
            <p className="playfair text-4xl ">
              EVERY EVENT BEGINS WITH A STORY.
            </p>

            <div className="w-0.5 bg-gray-700 min-h-24 mt-20"></div>
          </div>
        </div>

        <div className="bg-red-200"> </div>
      </div>
    </div>
  );
}

export default Homepage;
