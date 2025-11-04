import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar.jsx";
import api from "../../../axios";
import { useCart } from "../../../components/UserContext.jsx";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/user/product/${id}`);
        setProduct(res.data);

        if (res.data?.category?._id) {
          const relatedRes = await api.get(
            `/product/category/${res.data.category._id}`
          );
          setRelated(relatedRes.data.products || []);
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product._id,1); // ✅ Updates global cart count

    // Save product in localStorage
    const existing = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updated = [...existing, { ...product, quantity }];
    localStorage.setItem("cartItems", JSON.stringify(updated));

    alert("Added to cart!");
  };

  if (!product) return null;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-4 md:px-16 lg:px-28 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-700 font-semibold hover:underline py-8"
        >
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          <div className="flex flex-col gap-4 items-center">
            <img
              src={`http://localhost:3030${product.image}`}
              alt={product.product_name}
              className="w-full max-w-md h-[400px] object-cover rounded-xl border border-gray-200"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {product.product_name}
            </h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="text-3xl  font-extrabold text-green-600 mb-6">
              ${product.price}
            </div>

           

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1  bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Add to Cart
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
