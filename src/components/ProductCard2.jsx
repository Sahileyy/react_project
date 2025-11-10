
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ProductCard2 = ({ products }) => {
//   const navigate = useNavigate();
//   const [visibleCount, setVisibleCount] = useState(6);
  

//   const displayedProducts = products.slice(3, visibleCount);
  
//   const handleShowMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

 
//   const handleProductClick = (productId) => {
//     const user = localStorage.getItem("user");
    
//     if (!user) {
//       alert("Please login to view product details");
//       navigate('/login');
//     } else {
//       navigate(`/product/${productId}`);
//     }
//   };

//   return (
//     <section className="w-full bg-gray-50 py-6 px-6 md:px-12 lg:px-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {displayedProducts.map((product) => (
//           <div
//             key={product._id}
//             onClick={() => handleProductClick(product._id)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
//           >
//             <img
//               src={`http://localhost:3030${product.image}`}
//               alt={product.product_name}
//               className="w-48 h-48 object-cover rounded-xl mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">
//               {product.product_name}
//             </h3>
//             <p className="text-gray-500 text-sm mt-2 text-center">
//               {product.description}
//             </p>
//             <div className="mt-4 text-lg font-bold text-blue-700">
//               ${product.price}
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleCount < products.length && (
//         <div className="flex justify-center mt-8">
//           <p
//             onClick={handleShowMore}
//             className="text-blue-500 cursor-pointer hover:underline hover:text-blue-700 font-semibold"
//           >
//             Show More
//           </p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductCard2;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ products }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  const displayedProducts = products.slice(3, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleProductClick = (productId) => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login to view product details");
      navigate("/login");
    } else {
      navigate(`/product/${productId}`);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(displayedProducts)&& 
        displayedProducts.map((product) => (
          <div
            key={product._id}
            onClick={() => handleProductClick(product._id)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={`http://13.201.21.101/api${product.image}`}
              alt={product.product_name}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              {product.product_name}
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-center line-clamp-2">
              {product.description}
            </p>
            <div className="mt-3 text-base sm:text-lg font-bold text-blue-700">
              ${product.price}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductCard2;
