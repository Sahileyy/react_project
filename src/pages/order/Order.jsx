import React, { useEffect, useState } from "react";
import api from "../../axios"
import Navbar from "../../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [cart, setCart] = useState(null);
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await api.get("/user/cart/view", { withCredentials: true });
        setCart(res.data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);


  const handlePlaceOrder = async () => {
    try {
      setPlacingOrder(true);
      const res = await api.post(
        "/user/order",
        { orderStatus: "pending" },
        { withCredentials: true }
      );

      alert("Order placed successfully!");
      console.log(res.data);
      navigate("/user/myorder"); 
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Failed to place order");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 py-8">
          Review Your Order
        </h1>

        {!cart || !cart.items?.length ? (
          <div className="flex items-center justify-center text-gray-600 text-lg h-64">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">
              {cart.items.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`http://13.201.21.101/api${item.productId.image}`}
                      alt={item.productId.product_name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {item.productId.product_name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-semibold">
                      ${item.price * item.quantity}
                    </p>
                    <p className="text-gray-500 text-sm">₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cart.totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg text-gray-800">
                  <span>Total</span>
                  <span>${cart.totalAmount}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:bg-gray-400"
              >
                {placingOrder ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderPage;
