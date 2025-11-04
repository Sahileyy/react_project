
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

//  cart items to localStorage
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated")); // Notify listeners (like Navbar)
};

//product to cart
export const addToCart = (product) => {
  const cart = getCart();

  // Optional: Prevent duplicates (same product twice)
  const existingItem = cart.find((item) => item._id === product._id);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

//  Remove product from cart
export const removeFromCart = (productId) => {
  const cart = getCart().filter((item) => item._id !== productId);
  saveCart(cart);
};

// Clear all cart i
export const clearCart = () => {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};
