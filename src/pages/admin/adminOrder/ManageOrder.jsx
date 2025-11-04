
import React, { useEffect, useState } from "react";
import api from "../../../axios";
import { useNavigate } from "react-router-dom";
import { AdminNavbar } from "../../../components/navbar/AdminNavbar";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await api.get("/admin/orders", { withCredentials: true });
      console.log("Fetched orders:", res.data);
      const data = Array.isArray(res.data) ? res.data : res.data.orders || [];
      setOrders(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setUpdating(true);
      await api.put(`/admin/order/${orderId}`, { status: newStatus });
      await fetchOrders();
      alert("Order status updated!");
    } catch (err) {
      console.error("Error updating order:", err);
    } finally {
      setUpdating(false);
    }
  };

  const getAvailableStatuses = (currentStatus) => {
    const statusFlow = {
      pending: ["pending", "shipped", "cancelled"],
      shipped: ["shipped", "delivered", "cancelled"],
      delivered: ["delivered"],
      cancelled: ["cancelled"], 
    };
    return statusFlow[currentStatus] || ["pending"];
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Orders</h1>

        {orders.length === 0 ? (
          <div className="text-gray-600 text-lg">No orders found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-4">User</th>
                  <th className="text-left p-4">Items</th>
                  <th className="text-left p-4">Total</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const availableStatuses = getAvailableStatuses(order.status);
                  const isLocked = order.status === "delivered" || order.status === "cancelled";

                  return (
                    <tr key={order._id} className="border-b">
                      <td className="p-4">
                        {order.user_id?.username || "N/A"} <br />
                        <span className="text-sm text-gray-500">
                          {order.user_id?.email || ""}
                        </span>
                      </td>
                      <td className="p-4">
                        {order.items?.map((item) => (
                          <div key={item._id} className="text-sm">
                            {item.product_id?.product_name} × {item.quantity}
                          </div>
                        ))}
                      </td>
                      <td className="p-4 font-semibold">${order.total_price}</td>
                      <td className="p-4">
                        <span
                          className={`capitalize px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : order.status === "shipped"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          className={`border p-2 rounded ${
                            isLocked
                              ? "bg-gray-100"
                              : "cursor-pointer"
                          }`}
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(order._id, e.target.value)
                          }
                          disabled={updating || isLocked}
                        >
                          {availableStatuses.map((status) => (
                            <option key={status} value={status}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                          ))}
                        </select>
                        {isLocked && (
                          <p className="text-xs text-gray-500 mt-1">
                            Status locked
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <div className="text-center font-bold py-6">
          <p
            className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Back to Dashboard
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;