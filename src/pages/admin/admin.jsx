import React from "react"; 
import {  useNavigate } from "react-router-dom";


const AdminDashboard = () => {

  const Navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#919191f0] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <button className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition font-bold" onClick={()=> Navigate ('/admin/category')}>
             Manage Category
          </button>
          <button onClick={()=> Navigate('/admin/adminProduct')} className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition font-bold">
             Manage Product
          </button>
          <button onClick={()=>{Navigate('/admin/adminPannel')}} className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition font-bold">
             Manage Users
          </button>
          <button className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition font-bold">
             Manage Orders
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-14 ">
        <h1 className="text-3xl font-bold text-[#000000] mb-6">
          Welcome, Admin
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#919191f0] p-6 rounded-lg shadow hover:shadow-lg transition"   onClick={() => Navigate('/admin/createCategory')} >
            <h2 className="text-xl font-semibold mb-2 text-white">Create Category</h2>
            <p className="text-white text-sm">
              Add new categories for products.
            </p>
          </div>

          <div className="bg-[#919191f0] p-6 rounded-lg shadow hover:shadow-lg transition"  onClick={() => Navigate('/admin/addProduct')} >
            <h2 className="text-xl font-semibold mb-2 text-white">Add Product</h2>
            <p className="text-white text-sm">
              Upload and manage products.
            </p>
          </div>

          <div onClick={()=>{Navigate('/admin/adminPannel')}} className="bg-[#919191f0] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-white">Manage Users</h2>
            <p className="text-white text-sm">
              View and update user information.
            </p>
          </div>

          <div className="bg-[#919191f0] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-white">Manage Orders</h2>
            <p className="text-white text-sm">
              Track and process customer orders.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;