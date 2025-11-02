import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ products = [] }) => {
  const navigate = useNavigate();

  // show first 6 products initially
  const [visibleCount, setVisibleCount] = useState(6);

  // get products up to visibleCount
  const displayedProducts = products.slice(0, visibleCount);

  // handle button click
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="w-full bg-gray-50 py-6 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        All Products
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={`http://localhost:3030${product.image}`}
              alt={product.product_name}
              className="w-48 h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {product.product_name}
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

      {/* Show More Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="text-blue-500 font-semibold hover:underline hover:text-blue-700"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductCard2;
