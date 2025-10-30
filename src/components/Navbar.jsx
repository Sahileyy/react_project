import React, { useEffect, useState } from 'react';
import './navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import menu from '../assets/menu.svg';
import logo from '../assets/logo.png';
import search from '../assets/search.svg';
import person from '../assets/person.svg';
import cart from '../assets/cart.svg';

import api from '../axios';

const Navbar = () => {

  const navigate = useNavigate();
 const userData = JSON.parse(localStorage.getItem('user'))
  
 const handleLogout = () =>{
  localStorage.removeItem("user");
  navigate('/')
 }

  return (
    <nav className="navbar w-full fixed h-12 z-50" >
      <div className="navbar-left ">
      
        
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-center border-2 rounded-lg ">
        <input
          type="text"
          placeholder="Search..."
          className="search-input transition-transform duration-300 hover:scale-105"
        />
        <img src={search} alt="Search" className="icon search-icon w-2 h-2 " />
      </div>

      <div className="navbar-right">
           <img src={cart} alt="Cart" className="icon"  onClick={() => navigate('/user/cart/view')} />
           <img src={person} alt="Sign In" className="icon" onClick={() => navigate('/user/login')}/>
           
               {/* Login / Logout button */}
        {userData ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition-all"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/user/login')}
            className="bg-green-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-all"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;