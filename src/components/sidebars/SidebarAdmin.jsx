import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SidebarAdmin = () => {

    const navigate = useNavigate()

  return (
    <div>     {/* Sidebar */}
      <aside className="w-64 h-full bg-[#748c62] text-white flex flex-col p-4 sticky">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <button className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition-transform duration-300 hover:scale-105 font-bold" onClick={()=> navigate ('/admin/category')}>
             Manage Category
          </button>
          <button onClick={()=> navigate('/admin/adminProduct')} className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition-transform duration-300 hover:scale-105 font-bold">
             Manage Product
          </button>
          <button onClick={()=>{navigate('/admin/adminPannel')}} className="text-left hover:bg-white hover:text-[#000000] p-2 rounded transition-transform duration-300 hover:scale-105 font-bold">
             Manage Users
          </button>
        </nav>
      </aside></div>
  )
}
