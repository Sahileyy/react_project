
// import React from "react"; 
// import { useNavigate } from "react-router-dom"; 
// import logo from "../assets/logo.png"; 
// import cart from "../assets/cart.svg"; 
// import person from "../assets/person.svg"; 
// import search from "../assets/search.svg"; 
// import { useCart } from "../components/UserContext"; 
 
// const Navbar = () => { 
//   const navigate = useNavigate(); 
//   const { cartCount } = useCart();
  
//   //  checking  user exists  localStorage
//   const isLoggedIn = localStorage.getItem("user");

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("cartItems");
//     localStorage.removeItem("cartCount");
//     navigate("/user/login");
//     window.location.reload(); // Refresh to update context
//   };

//   const handlePersonClick = () => {
//     if (isLoggedIn) {
//       alert("You are already logged in!");
//     } else {
//       navigate("/user/login");
//     }
//   };
 
//   return ( 
//     <nav className="navbar w-full fixed h-12 bg-white shadow-md z-50 flex justify-between items-center px-6"> 
//       <div className="navbar-left flex items-center"> 
//         <img 
//           src={logo} 
//           alt="Logo" 
//           className="w-20 cursor-pointer" 
//           onClick={() => navigate("/")} 
//         /> 
//       </div> 
 
//       <div className="navbar-center border rounded-lg flex items-center"> 
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           className="p-1 text-sm outline-none" 
//         /> 
//         <img src={search} alt="Search" className="w-4 h-4 m-2" /> 
//       </div> 
 
//       <div className="navbar-right flex items-center gap-6 relative"> 
//         {/* Cart with badge */} 
//         <div 
//           className="relative cursor-pointer" 
//           onClick={() => navigate("/user/cart/view")} 
//         > 
//           <img src={cart} alt="Cart" className="w-6" /> 
//           {cartCount > 0 && ( 
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"> 
//               {cartCount} 
//             </span> 
//           )} 
//         </div> 
 
//         <img 
//           src={person} 
//           alt="Profile" 
//           className="w-6 cursor-pointer" 
//           onClick={handlePersonClick}
//         /> 

        
//         {isLoggedIn && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1 rounded transition-colors"
//           >
//             Logout
//           </button>
//         )}
//       </div> 
//     </nav> 
//   ); 
// }; 
 
// export default Navbar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import person from "../assets/person.svg";
import search from "../assets/search.svg";
import { useCart } from "../components/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");
    navigate("/user/login");
    window.location.reload();
  };

  const handlePersonClick = () => {
    if (isLoggedIn) {
      alert("You are already logged in!");
    } else {
      navigate("/user/login");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
      setShowSearchPopup(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="h-14 md:h-16 w-full px-4 flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-16 sm:w-20 md:w-24 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => navigate("/")}
          />

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-gray-200 rounded-full overflow-hidden bg-gray-50 hover:bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-400"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="p-2 px-3 text-sm outline-none w-64 lg:w-80 bg-transparent"
            />
            <button
              type="submit"
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <img src={search} alt="Search" className="w-5 h-5" />
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Mobile Search Icon */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-transform duration-150"
              aria-label="Search"
              onClick={() => setShowSearchPopup(true)}
            >
              <img
                src={search}
                alt="Search"
                className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
              />
            </button>

            {/* Cart */}
            <div
              className="relative cursor-pointer hover:scale-105 transition-transform duration-150"
              onClick={() => navigate("/user/cart/view")}
            >
              <img src={cart} alt="Cart" className="w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Profile */}
            <img
              src={person}
              alt="Profile"
              className="w-6 cursor-pointer hover:scale-105 transition-transform duration-150"
              onClick={handlePersonClick}
            />

            {/* Logout Button (Desktop Only) */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="hidden md:inline-block bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 text-white text-sm font-medium px-4 py-1 rounded-full transition-all duration-200 shadow-md"
              >
                Logout
              </button>
            )}

            {/* Hamburger Menu (Mobile Only) */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              aria-label="Menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <span className="block w-5 h-[2px] bg-black mb-1" />
              <span className="block w-5 h-[2px] bg-black mb-1" />
              <span className="block w-5 h-[2px] bg-black" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden px-4 pb-2 transition-[max-height] duration-300 overflow-hidden ${
            menuOpen ? "max-h-32" : "max-h-0"
          }`}
        />
      </nav>

      {/* ✅ Responsive Search Popup */}
      {showSearchPopup && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center z-[999]"
          onClick={() => setShowSearchPopup(false)}
        >
          {/* Mobile = bottom sheet | Desktop = centered box */}
          <div
            className="bg-white w-full md:w-[90%] md:max-w-sm rounded-t-2xl md:rounded-2xl shadow-2xl p-6 animate-popupIn transform translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Search Products
              </h2>
              <button
                onClick={() => setShowSearchPopup(false)}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold transition-transform duration-200 hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
