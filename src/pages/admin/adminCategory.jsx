import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios";
import { AdminNavbar } from "../../components/navbar/AdminNavbar";
import { SidebarAdmin } from "../../components/sidebars/SidebarAdmin";

export const AdminCategory = () => {
  const {id} = useParams
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchCategorie() {
      try {
        const response = await api.get("/admin/category");
        setCategory(response.data);
      } catch (error) {
        console.log("Error fetching categories:");
      }
    }
    fetchCategorie();
  }, [refresh]);

  const handleDeleteCategory = async (categoryId) => {
  try {
    const res = await api.delete(`/admin/category/${categoryId}`);
    alert(res.data.message || "Category deleted successfully");

    // ✅ Instantly update state so no reload needed
    setCategory((prev) => prev.filter((cat) => cat._id !== categoryId));
  } catch (err) {
    if (err.response?.status === 400) {
      alert(err.response.data.message || "Cannot delete category that has products.");
    } else {
      console.error(err);
      alert("Error deleting category");
    }
  }
};


  return (
  <>
        <AdminNavbar/>
      <div className="flex">
      <div className="flex">
        
      <SidebarAdmin/>
      </div>
    <div className="p-6 font-sans bg-white w-full h-screen">
      <h2 className="text-2xl  mb-4 text-gray-800 font-bold text-center ">CATEGORIES</h2>

      {/* <button
        onClick={() => navigate("/admin/addcategory")}
        className="mb-4 px-4 py-2 bg-[#98b880] text-white rounded hover:bg-green-700 transition-colors"
        >
        + Add Category
        </button> */}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#98b880] text-white">
              <th className="p-2 border">No.</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? (
              category.map((cat, index) => (
                <tr
                key={cat._id}
                className="hover:bg-gray-100 transition-colors text-gray-700"
                >
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{cat.name}</td>
                  <td className="p-2 border">{cat.description || "—"}</td>
                  <td className="p-2 border flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/putCategory/${cat._id}`)}
                      className="px-2 py-1 bg-[#98b880] text-white rounded hover:bg-green-700 transition-colors"
                      >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800 transition-colors"
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-4 text-gray-500"
                  >
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        <div className="text-center font-bold py-6"><p className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105" onClick={()=>{navigate('/admin')}}>Back to Dashboard</p></div>
      
    </div>
            </div>
                  </>
  );
};

export default AdminCategory;