import React, { useState } from "react";
import api from "../../../axios";
import { useNavigate } from "react-router-dom";
import { AdminNavbar } from "../../../components/navbar/AdminNavbar";
import { SidebarAdmin } from "../../../components/sidebars/SidebarAdmin";

const AddProduct = () => {
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file)); //  url of img
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ product_name, price, description, category, image });

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
      const data = await api.post("/admin/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);

      alert("Product added successfully");
      navigate("/admin/adminProduct");
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Error adding product");
    }
  };

  return (<>
      <AdminNavbar/>
    <div className="h-full  flex bg-gray-50">
      {/* <SidebarAdmin/> */}
      <main className="flex-1 gap-6" >
        
      
        <div className="max-w-md mx-auto bg-white mt-6 shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
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

            {/* Price */}
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

            {/* Description */}
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

            {/* Category */}
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
                <option value="69033de0bbffeb69e60c9e56">Ski</option>
                <option value="68f8eb27791b73aebb80ac33">Tennis</option>
                <option value="68f8ec0f791b73aebb80ac37">Accessories</option>
                <option value="68f8ee44791b73aebb80ac6a">Shoes</option>
                <option value="68fa01e575cfd5dfea2d4a3b">Protection</option>
                <option value="6906ff8737c7b00a1fc6e0bc">Bags</option>

              </select>
            </div>

            {/* Image Upload + Preview */}
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

              {/*  Preview */}
              {previewImage && (
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">Image Preview:</p>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-48 h-48 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg 
              hover:bg-green-700 transition-colors"
            >
              Create Product
            </button>
          </form>
        </div>

        <div className="text-center font-bold py-6">
          <p
            className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105"
            onClick={() => navigate("/admin")}
          >
            Back to Dashboard
          </p>
        </div>
      </main>
    </div>
    </>
  );
};

export default AddProduct;
