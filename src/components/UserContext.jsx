import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Fetch cart count from backend
  useEffect(() => {
    async function fetchCount() {
      try {
        // Get user from localStorage
        const userStr = localStorage.getItem("user");
        if (!userStr) {
          setCartCount(0);
          return;
        }

        // Parse user object and check role
        const user = JSON.parse(userStr);
        
       
        if (user.role === "admin" || user.role === "ADMIN") {
          setCartCount(0);
          localStorage.removeItem("cartCount");
          return;
        }

        // Fetch cart count  users
        const res = await api.get("/user/cart/count");
        if (res.data?.count !== undefined) {
          setCartCount(res.data.count);
          localStorage.setItem("cartCount", JSON.stringify(res.data.count));
        }
      } catch (err) {
       
        if (err.response?.status === 403 || err.response?.status === 401) {
          setCartCount(0);
          localStorage.removeItem("cartCount");
        } else {
          console.error("Error fetching cart count:", err);
       
          const savedCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
          setCartCount(savedCount);
        }
      }
    }

    fetchCount();
  }, []);

  // add cartCount to localStorage when changes
  useEffect(() => {
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  
  const addToCart = async (product_id, quantity = 1) => {
    try {
     
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.role === "admin" || user.role === "ADMIN") {
          console.warn("Admins cannot add items to cart");
          return;
        }
      }

      await api.post("/user/cart/add", { product_id, quantity });
      setCartCount((prev) => prev + quantity);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};