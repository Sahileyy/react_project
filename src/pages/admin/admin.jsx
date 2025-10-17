import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#98b880] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition">
            🗂️ Create Category
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition">
            🛒 Add Product
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition">
            👥 Manage Users
          </button>
          <button className="text-left hover:bg-white hover:text-[#98b880] p-2 rounded transition">
            📦 Manage Orders
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#ff414e] mb-6">
          Welcome, Admin
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Create Category</h2>
            <p className="text-gray-600 text-sm">
              Add new categories for products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Add Product</h2>
            <p className="text-gray-600 text-sm">
              Upload and manage products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
            <p className="text-gray-600 text-sm">
              View and update user information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
            <p className="text-gray-600 text-sm">
              Track and process customer orders.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;