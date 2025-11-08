import React, { useEffect, useState } from "react";
import api from "../../../axios";
import Navbar from "../../../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  //  Fetch cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await api.get("/user/cart/view");
        setCart(res.data);
        setCartCount(res.data.items.length);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // ✅ Update quantity
  const updateQuantity = async (productId, delta) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => {
        if (item.productId._id === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      return { ...prevCart, items: updatedItems, totalAmount: newTotal };
    });

    try {
      const res = await api.put(`/user/cart/update/${cart._id}`, {
        productId,
        update: delta > 0 ? "increment" : "decrement",
      });
      setCart(res.data.cart);
      setCartCount(res.data.cart.items.length);
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };



  const handleRemove = async (productId) => {
    try {
        const res = await api.delete(`/user/cart/delete/${cart._id}`, {
            data: { product_id: productId }
        });
        
        console.log(" Deleted:", res.data);

        setCart((prevCart) => {
            const updatedItems = prevCart.items.filter(
                (item) => item.productId._id !== productId
            );

            const newTotal = updatedItems.reduce(
                (sum, item) => sum + item.quantity * item.price,
                0
            );

            return { ...prevCart, items: updatedItems, totalAmount: newTotal };
        });

        setCartCount((prev) => prev - 1);
    } catch (err) { 
        console.error("❌ Error deleting item:", err.response?.data || err);
        alert("Error deleting item. Please try again.");
    }
};

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading cart...
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <>
        <Navbar cartCount={cartCount} />
        <div className=" min-h-screen flex flex-col items-center justify-center text-gray-600">
          <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven’t added anything yet.</p>
          <a
            href="/"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Continue Shopping
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
        <h1 className=" pt-20 text-3xl font-bold text-gray-800 mb-10 text-center">
          Your Shopping Cart
        </h1>
           <button
        onClick={() => navigate(-1)}
        className="mb-8 w-28 rounded-md text-sky-500 font-sans font-extrabold  hover:text-green-400 "
      >
        Back
      </button>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.productId._id}
                className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md hover:shadow-lg p-5 transition"
              >
                <img
                  src={`http://localhost:3030${item.productId.image}`}
                  alt={item.productId.product_name}
                  className="w-32 h-32 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.productId.product_name}
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      {item.productId.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.productId._id, -1)}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId._id, 1)}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-lg font-bold text-blue-700 py-2">
                        ₹{item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => handleRemove(item.productId._id)}
                        className="bg-red-600 px-3 py-1 text-white rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-3">
              <span>Subtotal</span>
              <span>₹{cart.totalAmount}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-3">
              <span>Shipping</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-4">
              <span>Total</span>
              <span>₹{cart.totalAmount + 50}</span>
            </div>
            <button
              onClick={() => navigate("/user/order")}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
