import React from "react"; 
import {  useNavigate } from "react-router-dom";
import { SidebarAdmin } from "../../components/sidebars/SidebarAdmin";


const AdminDashboard = () => {

  const Navigate = useNavigate();
  const handleLogoutAdmin = () =>{
    localStorage.removeItem('user')
    Navigate('/admin/login')
  }

  return (
    
    <div className="min-h-screen bg-[#f9f9f9] flex">
    <SidebarAdmin/>  

      {/* Main Content */}
      <main className="flex-1 p-14 ">
         <div className="font-semibold flex-1 hover:underline hover:text-red-700 text-end mt-10">
           <p onClick={handleLogoutAdmin}>
             LOGOUT
           </p>
          </div>
        <h1 className="text-3xl font-bold text-[#000000] mb-6">
          Welcome, Admin
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#98b880] p-6 rounded-lg shadow hover:shadow-lg 
          transition-transform duration-300 hover:scale-105"   onClick={() => Navigate('/admin/createCategory')} >
            <h2 className="text-xl font-semibold mb-2 text-white">Create Category</h2>
            <p className="text-white text-sm">
              Add new categories for products.
            </p>
          </div>

          <div className="bg-[#98b880] p-6 rounded-lg shadow hover:shadow-lg 
          transition-transform duration-300 hover:scale-105"  onClick={() => Navigate('/admin/addProduct')} >
            <h2 className="text-xl font-semibold mb-2 text-white">Add Product</h2>
            <p className="text-white text-sm">
              Upload and manage products.
            </p>
          </div>

          <div onClick={()=>{Navigate('/admin/adminPannel')}} className="bg-[#98b880] p-6 rounded-lg shadow hover:shadow-lg 
          transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-white">Manage Users</h2>
            <p className="text-white text-sm">
              View and update user information.
            </p>
          </div>

          <div onClick={()=>{Navigate('/admin/orders')}} className="bg-[#98b880] p-6 rounded-lg shadow hover:shadow-lg 
          transition-transform duration-300 hover:scale-105">
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