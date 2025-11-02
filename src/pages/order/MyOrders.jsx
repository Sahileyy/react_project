import React, { useEffect, useState } from "react";
import api from "../../axios";
import Navbar from "../../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/user/myorder", { withCredentials: true });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-10">
        <div className="inline-block font-bold w-full ">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8 pt-5">My Orders</h1>
       
        </div>
        {orders.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            You haven’t placed any orders yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(`/user/order/${order._id}`)}
              >
                <div className="flex justify-between mb-3">
                  <p className="text-gray-700 font-semibold">
                    Order ID: <span className="text-sm">{order._id}</span>
                  </p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <hr className="my-2" />

                <div className="text-gray-700">
                  <p className="mb-2 font-semibold">
                    Total: ${order.total_price}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.items.length} items
                  </p>
                </div>

                <div className="mt-4 flex gap-2 overflow-x-auto">
                  {order.items.slice(0, 3).map((item) => (
                    <img
                      key={item._id}
                      src={`http://localhost:3030${item.product_id?.image}`}
                      alt={item.product_id?.product_name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  ))}
                  {order.items.length > 3 && (
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
                      +{order.items.length - 3} more
                    </div>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center py-8 text-lg font-bold "><h2 className="hover:cursor-pointer" onClick={()=>{navigate('/')}}>Back to Home</h2></div>
      </div>
    </>
  );
};

export default MyOrders;
