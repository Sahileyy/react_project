import React from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";

// Images
import skicat1 from "../../assets/ski/skicat1.jpg";
import prot from "../../assets/ski/prot.jpg";
import shoe1 from "../../assets/ski/shoe1.jpg";
import tennis1 from "../../assets/ski/tennis1.jpg";
import asses1 from "../../assets/ski/asses1.jpg";

import skip1 from "../../assets/skicategory/skiP1.webp";
import racket1 from "../../assets/tenniscategory/tenniscat1.webp";
import bag1 from "../../assets/tenniscategory/tenniscat3.webp";

import banner1 from "../../assets/banners/banner 6.avif";
import video2 from "../../assets/bg-video/video2.mp4";

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    { id: "68f8e9c2791b73aebb80ac00", name: "SKI", img: skicat1 },
    { id: "68fa01e575cfd5dfea2d4a3b", name: "PROTECTION", img: prot },
    { id: "68f8ee44791b73aebb80ac6a", name: "SHOES", img: shoe1 },
    { id: "68f8eb27791b73aebb80ac33", name: "TENNIS", img: tennis1 },
    { id: "68f8ec0f791b73aebb80ac37", name: "ACCESSORIES", img: asses1 },
  ];

  const products = [
    {
      id: 1,
      name: "Ski Board",
      image: skip1,
      description: "Durable and lightweight ski board for flying.",
      price: 5999,
    },
    {
      _id: 2,
      name: "Racket",
      image: racket1,
      description: "For high performance.",
      price: 2999,
    },
    {
      _id: 3,
      name: "Duffle Bag",
      image: bag1,
      description: "Elegant white perfect for grass-court.",
      price: 1889,
    },
  ];

  const handleCatClick = (category) => {
    navigate(`/public/product/category/${category.id}`, {
      state: { categoryName: category.name },
    });
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-16 w-full h-full bg-gray-50">
        {/* Hero Video Section */}
        <div className="relative w-full h-[90vh] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl text-white tracking-widest drop-shadow-lg font-extrabold font-mono">
              ALL SPORTS
            </h1>

            {/* Categories Grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-[90%] max-w-6xl">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCatClick(cat)}
                  className="flex flex-col items-center text-white cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-md bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${cat.img})` }}
                  ></div>
                  <div className="mt-3 text-lg font-semibold tracking-wide">
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-10">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 text-center">
                  {product.description}
                </p>
                <div className="mt-4 text-lg font-bold text-blue-700">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banner */}
        <div className="w-full">
          <img
            src={banner1}
            alt="banner"
            className="w-full object-cover rounded-none"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
