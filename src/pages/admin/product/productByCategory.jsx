import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductByCategory = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(id); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/product/category/${id}`
        );

       
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]); 
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
     
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-700 font-semibold hover:underline"
      >
        ← Back
      </button>

    
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 uppercase">
        {categoryName}
      </h2>

      {/* Product Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No products available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={p.image}
                alt={p.product_name}
                className="w-48 h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {p.product_name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{p.description}</p>
              <div className="mt-4 text-lg font-bold text-blue-700">
                ${p.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductByCategory;
