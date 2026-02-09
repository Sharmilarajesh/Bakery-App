import React from "react";
import { Link } from "react-router-dom";

import cakesImg from "../assets/categories/cakes.jpg";
import cookiesImg from "../assets/categories/cookies.jpg";
import breadImg from "../assets/categories/bread.jpeg";
import muffinsImg from "../assets/categories/muffins.jpg";

const categories = [
  { 
    name: "Cakes", 
    img: cakesImg, 
    path: "/products?category=Cake", 
    desc: "Delicious cakes baked fresh every day!" 
  },
  { 
    name: "Cookies", 
    img: cookiesImg, 
    path: "/products?category=Cookies", 
    desc: "Crunchy and sweet cookies for everyone." 
  },
  { 
    name: "Breads", 
    img: breadImg, 
    path: "/products?category=Bread", 
    desc: "Freshly baked bread for your daily meals." 
  },
  { 
    name: "Muffins", 
    img: muffinsImg, 
    path: "/products?category=Muffin", 
    desc: "Soft and fluffy muffins with tasty flavors." 
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
     
      <h2 className="text-4xl font-bold  mb-12 text-center text-[#C97C5D]">
        Welcome to Our Bakery
      </h2>
      <p className="text-center text-gray-700 mb-12">
        Discover our delicious range of baked goodies and treats!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            key={cat.name}
            className="group overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800">{cat.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{cat.desc}</p>
              <span className="mt-3 inline-block text-[#C97C5D] font-semibold">
                Explore {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
