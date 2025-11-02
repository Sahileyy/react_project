import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import card1 from "../assets/highlightcards/highlight2.jpg";
import card2 from "../assets/highlightcards/highlight1.jpg";

const HighlightCards = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-5 px-2 md:px-12 lg:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            src={card1}
            alt="Winter Collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
          
          {/* Bottom text section */}
          <div className="absolute bottom-5 left-5 z-10 text-white">
            <h3 className="text-xl font-semibold mb-2">Winter Collection</h3>
            <p className="text-sm text-gray-200 mb-3">
              Stay warm and stylish this season.
            </p>
            <button
              onClick={() => navigate("/public/product")}
              className="px-4 py-1.5 bg-white text-black text-sm rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            src={card2}
            alt="Exclusive Offers"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>

          {/* Bottom text section */}
          <div className="absolute bottom-5 left-5 z-10 text-white">
            <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
            <p className="text-sm text-gray-200 mb-3">
              Get up to 50% off on top gear!
            </p>
            <button
              onClick={() => navigate("/public/product")}
              className="px-4 py-1.5 bg-white text-black text-sm rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Explore
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightCards;
