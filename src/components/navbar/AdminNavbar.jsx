import React from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export const AdminNavbar = () => {
    const navigate = useNavigate()
    const handleDashBoard = () =>{
        navigate('/admin')
    }

    const handleLogoutAdmin =()=>{
        localStorage.removeItem('user')
        navigate('/admin/login')
    }

  return (
    <>
    <div className="w-full py-2 px-4 bg-[#98b880] text-white flex justify-between items-center  shadow-md">
  {/* Company Logo */}
  <div className="flex items-center gap-10">
    <img
      src={logo}
      alt="Company Logo"
      className="w-15 h-8 object-contain"
    />
    {/* <span className="text-xl font-semibold tracking-wide"></span> */}
  </div>

  {/* Navigation Buttons */}
  <div className="flex items-center gap-4">
    <button className="bg-white text-black w-20 h-19 p-1 rounded-lg hover:bg-slate-50 transition" onClick={handleDashBoard}>
      Home
    </button>
    <button className="bg-red-600 w-20 h-19 p-1 rounded-lg hover:bg-red-700 transition" onClick={handleLogoutAdmin}>
      Logout
    </button>
  </div>
</div>
</>
  )
}
