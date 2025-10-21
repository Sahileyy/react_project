import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../axios";


const AdminPutProduct = () => {
    const {id} = useParams()
  // Basic state for product fields
  const [product, setProduct] = useState({
    product_name: "Sample Product",
    price: 100,
    description: "This is a sample product for editing.",
    category: "Shoes",
    image: null,
  });

  useEffect (()=>{
      async function getProductHere() {

        const response = await api.get( `/admin/product/${id}`)
        console.log(response.data);
        setProduct(response.data)
                
    }
    getProductHere()

  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };


  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    alert("Product updated (check console)");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#7a7a7a] text-white flex flex-col p-6">
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

      {/* Main Section */}
      <main className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="product_name"
                value={product.product_name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
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
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Enter product description"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880] min-h-[100px]"
              ></textarea>
            </div>

  
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              >
               <option value="">Select Category</option>

                <option value="68f611724c4ff59027355023">Shoes</option>
                 <option value="68f725d4e0fc72162c15430f">Women'sShoes</option>
              </select>
            </div>


            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-gray-700"
              />
            </div>

       
            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg 
              hover:bg-green-700 transition-colors"
            >
              Update Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminPutProduct;
