import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios";
import { SidebarAdmin } from "../../components/sidebars/SidebarAdmin";

export const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await api.get(`/admin/category/${id}`);
        setName(response.data.name);
        setDescription(response.data.description || "");
      } catch (err) {
        console.log(err);
        alert("enter fetching category data");
      }
    }
    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required");
      return;
    }
    try {
      await api.put(`/admin/category/${id}`, { name, description });
      alert("Category updated successfully!");
      navigate("/admin/category");
    } catch (err) {
      console.error(err);
      alert("Error updating category");
    }
  };

  return (

    <div className="min-h-screen flex bg-gray-50">
    <SidebarAdmin/>
      <main className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Category
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98b880] min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Update Category
            </button>
          </form>
        </div>
        <div className="text-center font-bold py-6"><p className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105" onClick={()=>{navigate('/admin')}}>Back to Dashboard</p></div>

      </main>
    </div>
  );
};

export default EditCategory;
