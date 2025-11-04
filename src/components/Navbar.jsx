
import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png"; 
import cart from "../assets/cart.svg"; 
import person from "../assets/person.svg"; 
import search from "../assets/search.svg"; 
import { useCart } from "../components/UserContext"; 
 
const Navbar = () => { 
  const navigate = useNavigate(); 
  const { cartCount } = useCart();
  
  //  checking  user exists  localStorage
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");
    navigate("/user/login");
    window.location.reload(); // Refresh to update context
  };

  const handlePersonClick = () => {
    if (isLoggedIn) {
      alert("You are already logged in!");
    } else {
      navigate("/user/login");
    }
  };
 
  return ( 
    <nav className="navbar w-full fixed h-12 bg-white shadow-md z-50 flex justify-between items-center px-6"> 
      <div className="navbar-left flex items-center"> 
        <img 
          src={logo} 
          alt="Logo" 
          className="w-20 cursor-pointer" 
          onClick={() => navigate("/")} 
        /> 
      </div> 
 
      <div className="navbar-center border rounded-lg flex items-center"> 
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-1 text-sm outline-none" 
        /> 
        <img src={search} alt="Search" className="w-4 h-4 m-2" /> 
      </div> 
 
      <div className="navbar-right flex items-center gap-6 relative"> 
        {/* Cart with badge */} 
        <div 
          className="relative cursor-pointer" 
          onClick={() => navigate("/user/cart/view")} 
        > 
          <img src={cart} alt="Cart" className="w-6" /> 
          {cartCount > 0 && ( 
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"> 
              {cartCount} 
            </span> 
          )} 
        </div> 
 
        <img 
          src={person} 
          alt="Profile" 
          className="w-6 cursor-pointer" 
          onClick={handlePersonClick}
        /> 

        
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1 rounded transition-colors"
          >
            Logout
          </button>
        )}
      </div> 
    </nav> 
  ); 
}; 
 
export default Navbar;