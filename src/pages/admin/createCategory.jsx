import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios";

export const CreateCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required");
      return;
    }

    try {
      await api.post("/admin/category", { name, description });
      alert("Category added successfully!");
      navigate("/admin/category");
    } catch (err) {
      console.error(err);
      alert("Error adding category");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#7a7a7a] text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <button
            onClick={() => navigate("/admin/category")}
            className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition font-bold"
          >
            Manage Category
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition font-bold">
            Manage Product
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition font-bold">
            Manage Users
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition font-bold">
            Manage Orders
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add Category
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter category name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98b880]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98b880] min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#98b880] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Category
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateCategory;
