import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar.jsx";
import api from "../../../axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState([]);

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

  const handleAddToCart = async () => {
    try {
      
      const res = await api.post("/user/cart/add", {
        product_id: product._id,
        quantity,
      });
      console.log(res.data);
      alert("Added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart");
    }
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

            <div className="text-3xl font-extrabold text-green-600 mb-6">
              ${product.price}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((q) => (q > 1 ? q - 1 : 1))
                  }
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
                >
                  -
                </button>
                <span className="px-5 py-2 text-gray-800 font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {related
                .filter((p) => p._id !== product._id)
                .slice(0, 4)
                .map((p) => (
                  <div
                    key={p._id}
                    onClick={() => navigate(`/user/product/${p._id}`)}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition p-4 flex flex-col items-center text-center"
                  >
                    <img
                      src={`http://localhost:3030${p.image}`}
                      alt={p.product_name}
                      className="w-40 h-40 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-gray-800">
                      {p.product_name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">${p.price}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
