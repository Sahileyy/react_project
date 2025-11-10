// import React, { useEffect, useState } from "react";
// import api from "../axios";
// import { useNavigate } from "react-router-dom";

// const ProductCards = ({ products }) => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full bg-gray-50 py- px-6 md:px-12 lg:px-20">
      

   
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-[370px] overflow-hidden ">
//         {products.slice(0, 3).map((product) => (
//           <div
//             key={product._id}
//             onClick={()=>{navigate(`/product/${product._id}`)}}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl  p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={`http://localhost:3030${product.image}`}
//               alt={product.product_name}
//               onClick={() => {
//                 navigate(`/user/product/${product._id}`);
//               }}
//               className="w-48 h-48 object-cover rounded-xl mb-4 cursor-pointer"
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
//     </section>
//   );
// };

// export default ProductCards;

import React, { useEffect, useState } from "react";
import api from "../axios";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ products }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50 py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {products.slice(0, 3).map((product) => (
          <div
            key={product._id}
            onClick={() => {
              navigate(`/product/${product._id}`);
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={`http://13.201.21.101/api${product.image}`}
              alt={product.product_name}
              onClick={() => {
                navigate(`/user/product/${product._id}`);
              }}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-xl mb-4 cursor-pointer"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              {product.product_name}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-2 text-center line-clamp-2">
              {product.description}
            </p>
            <div className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-blue-700">
              ${product.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
