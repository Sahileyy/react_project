import React, { useState } from "react";
import api from "../../../axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log({ product_name, price, description, category, image })

    if (!product_name.trim()) {
      alert("Product name Required");
      return;
    }

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const data = await api.post("/admin/product", formData,{
        headers:{"Content-Type":"multipart/form-data"},

      });
      console.log(data);
      
      alert("product added successfully");
      navigate("/admin/adminProduct");
    } catch (err) {
      console.log(err.response?.data || err);
      alert("error adding product");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 ">
      <aside className="w-64 bg-[#7a7a7a] text-white flex flex-col pl-5 mt-14">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
            Manage Category
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
            Manage Product
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
            Manage Users
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
            Manage Orders
          </button>
        </nav>
      </aside>

     
      <main className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                value={product_name}
                onChange={(e) => setProduct_name(e.target.value)}
                placeholder="Enter product name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Price *
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880] min-h-[100px]"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              >
                <option value="">Select Category</option>

                <option value="68f8e9c2791b73aebb80ac00">Ski</option>
                <option value="68f8eb27791b73aebb80ac33">Tennis</option>
                <option value="68f8ec0f791b73aebb80ac37">Accessories</option>
                <option value="68f8ee44791b73aebb80ac6a">Shoes</option>
                 
              
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg 
              hover:bg-green-700 transition-colors"
            >
              Create Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
// import React, { useEffect, useState } from "react";
// import api from "../../../axios";
// import { useNavigate, useLocation } from "react-router-dom";

// const AdminProduct = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [products, setProducts] = useState([]);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const response = await api.get("/admin/product");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [location.state]); // 👈 this ensures refresh after update navigation

//   const handleEdit = (id) => {
//     navigate(`/admin/edit-product/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/admin/product/${id}`);
//       alert("Product deleted successfully!");
//       fetchProducts(); // Refresh list after delete
//     } catch (err) {
//       console.log("Failed to delete product");
//       alert("Failed to delete product");
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#7a7a7a] text-white flex flex-col pt-20 pl-5">
//         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
//         <nav className="flex flex-col space-y-3">
//           <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
//             Manage Category
//           </button>
//           <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
//             Manage Product
//           </button>
//           <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
//             Manage Users
//           </button>
//           <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded font-bold">
//             Manage Orders
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10 mt-10">
//         <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Product List
//           </h2>

//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-[#98b880] text-white">
//               <tr>
//                 <th className="py-2 px-4 border">Image</th>
//                 <th className="py-2 px-4 border">Name</th>
//                 <th className="py-2 px-4 border">Price</th>
//                 <th className="py-2 px-4 border">Category</th>
//                 <th className="py-2 px-4 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <tr key={product._id} className="text-center">
//                     <td className="py-2 px-4 border">
//                       <img
//                         src={`http://localhost:3030${product.image}`}
//                         alt="product"
//                         className="w-16 h-16 object-cover mx-auto rounded"
//                       />
//                     </td>
//                     <td className="py-2 px-4 border">{product.product_name}</td>
//                     <td className="py-2 px-4 border">₹{product.price}</td>
//                     <td className="py-2 px-4 border">
//                       {product.category?.name || "N/A"}
//                     </td>
//                     <td className="py-2 px-4 border space-x-2">
//                       <button
//                         onClick={() => handleEdit(product._id)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="py-4 text-gray-500">
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminProduct;

