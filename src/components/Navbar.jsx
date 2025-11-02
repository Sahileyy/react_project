// import React, { useEffect, useState } from 'react';
// import './navbar/Navbar.css';
// import { useNavigate } from 'react-router-dom';
// import menu from '../assets/menu.svg';
// import logo from '../assets/logo.png';
// import search from '../assets/search.svg';
// import person from '../assets/person.svg';
// import cart from '../assets/cart.svg';

// import api from '../axios';

// const Navbar = () => {

//   const navigate = useNavigate();
//  const userData = JSON.parse(localStorage.getItem('user') || 'null')
  
//  const handleLogout = () =>{
//   localStorage.removeItem("user");
//   navigate('/')
//   window.location.reload()
//  }

//   return (
//     <nav className="navbar w-full fixed h-12 z-50" >
//       <div className="navbar-left ">
      
        
//         <img src={logo} alt="Logo" className="logo" />
//       </div>

//       <div className="navbar-center border-2 rounded-lg ">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="search-input transition-transform duration-300 hover:scale-105"
//         />
//         <img src={search} alt="Search" className="icon search-icon w-2 h-2 " />
//       </div>

//       <div className="navbar-right">
//            <img src={cart} alt="Cart" className="icon"  onClick={() => navigate('/user/cart/view')} />
//            <img src={person} alt="Sign In" className="icon" onClick={() => navigate('/user/login')}/>
           
//                {/* Logout button */}
//         {userData && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition-all"
//           >
//             Logout
//           </button>
//          )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import './navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user'));
  const [cartCount, setCartCount] = useState(0);

  // Load cart count initially
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);

    // Listen for cart updates
    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(updatedCart.length);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar w-full fixed h-12 z-50 flex justify-between items-center px-6 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-8 cursor-pointer" onClick={() => navigate('/')} />
      </div>

      <div className="flex items-center gap-6 relative">
        <div className="relative cursor-pointer" onClick={() => navigate('/user/cart/view')}>
          <img src={cart} alt="Cart" className="h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        {userData && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition-all"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

