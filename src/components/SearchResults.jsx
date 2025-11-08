import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axios";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await api.get(`/public/product/search?query=${query}`);
        setResults(res.data);
      } catch (err) {
        console.log("Error fetching search results", err);
      }
    }
    fetchResults();
  }, [query]);

  return (
    <>
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
            Search results for:{" "}
            <span className="text-blue-600 break-all">{query}</span>
          </h1>

          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto bg-black text-white px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            Home
          </button>
        </div>

        {/* Results Section */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {results.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-transform hover:scale-105 duration-300 flex flex-col"
              >
                <img
                  src={`http://localhost:3030${product.image}`}
                  alt={product.product_name}
                  className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                  {product.product_name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 flex-grow">
                  {product.description}
                </p>
                <div className="text-blue-600 font-bold mt-3 text-base">
                  ₹{product.price}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-10 text-lg">
            No products found.
          </p>
        )}
      </div>

      <FooterSection />
    </>
  );
};

export default SearchResults;
