import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../axios";
import { SidebarAdmin } from "../../../components/sidebars/SidebarAdmin";

const AdminPutProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState("");

 
  useEffect(() => {
    async function fetchData() {
      try {
 
        const prodRes = await api.get(`/admin/product/${id}`);
        const prod = prodRes.data;


        setProduct({
          product_name: prod.product_name || "",
          price: prod.price || "",
          description: prod.description || "",
          category: prod.category?._id || prod.category || "",
          image: null,
        });

        // set current image preview
        setPreview(prod.image ? `https://sahilsports.duckdns.org/api${prod.image}` : "");

        // fetch category list
        const catRes = await api.get("/admin/category");
        setCategories(catRes.data);
      } catch (err) {
        console.error("Error fetching product or categories:", err);
      }
    }

    fetchData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({ ...prev, image: file }));
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("product_name", product.product_name);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("category", product.category);

      if (product.image instanceof File) {
        formData.append("image", product.image);
      }

      const response = await api.put(`/admin/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(response.data.message || "Product updated successfully!");
      navigate("/admin/adminProduct");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update product. Check console for details.");
    }
  };

  return (
    <>
    
    <div className="min-h-screen flex bg-gray-50">
      <main className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="product_name"
                value={product.product_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98b880]"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98b880]"
                />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg min-h-[100px] focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98b880]"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

          
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Image
              </label>
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md mb-2 border"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
              Update Product
            </button>
          </form>
        </div>
          <div className="text-center font-bold py-6"><p className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105" onClick={()=>{navigate('/admin')}}>Back to Dashboard</p></div>
      </main>
    </div>
              </>
  );
};

export default AdminPutProduct;
