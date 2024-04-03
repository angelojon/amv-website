import React from "react";

function Homepage() {
  return (
    <div className="bg-red-200 truncate">
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/photos/pexels-wendy-wei-1190297.jpg')",
        }}
      >
        <h1 className="text-white font-bold text-4xl">Hello</h1>
      </div>

      <div className="w-screen flex flex-col items-center mt-36 justify-center">
        <div>
          <p className="inter tracking-widest">OUR PROMISE</p>
          <h1>EVERY EVENT BEGINS WITH A STORY.</h1>
        </div>

        <div className="w-0.5 bg-gray-700 min-h-24 mt-20"></div>
      </div>

      <div className="bg-red-200"> </div>
    </div>
  );
}

export default Homepage;
