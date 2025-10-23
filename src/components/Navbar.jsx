import React from 'react';
import './navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import menu from '../assets/menu.svg';
import logo from '../assets/logo.png';
import search from '../assets/search.svg';
import person from '../assets/person.svg';
import cart from '../assets/cart.svg';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar w-full fixed h-12 z-50" >
      <div className="navbar-left ">
        <img src={menu} alt="Menu" className="icon menu-icon" />
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-center border-2 rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <img src={search} alt="Search" className="icon search-icon w-2 h-2" />
      </div>

      <div className="navbar-right">
        <img src={person} alt="Sign In" className="icon" onClick={() => navigate('/user/login')}/>
        <img src={cart} alt="Cart" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;