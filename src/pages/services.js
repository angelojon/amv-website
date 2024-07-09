import React, { useState } from "react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("weddings");

  const categories = [
    { name: "LAUNCHES", id: "launches" },
    { name: "DESIGN SERVICES", id: "design" },
    { name: "CORPORATE GIVEAWAYS", id: "corporate" },
    { name: "CREATIVES", id: "creatives" },
    { name: "INAUGURATIONS", id: "inaugurations" },
  ];

  const images = {
    launches: [
      "/photos/home-wallpaper.jpg",
      "/photos/home-wallpaper.jpg",
      "/photos/home-wallpaper.jpg",
    ],
    design: [
      "/photos/pexels-wendy-wei-1190297.jpg",
      "/photos/pexels-wendy-wei-1190297.jpg",
      "/photos/pexels-wendy-wei-1190297.jpg",
    ],
    corporate: [
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
    ],
    creatives: [
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
    ],
    inaugurations: [
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
      "/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg",
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="px-8 py-24 flex justify-center items-center">
        <div className="text-center">
          <p className="playfair text-4xl w-full text-wrap text-center">
            Services
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`inter px-4 py-2 m-2 rounded-lg focus:outline-none transition duration-300 ease-in-out ${
              selectedCategory === category.id
                ? "text-pink-300"
                : "text-gray-700"
            } hover:text-pink-300`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images[selectedCategory]?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${selectedCategory} ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
