import React from "react";
import { AdminLogin } from "./pages/admin/adminLogin";
import AdminDashboard from "./pages/admin/admin";
import { UserLogin } from "./pages/users/userLogin";
import HomePage from "./pages/home/home";
import Register from "./pages/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCategory from "./pages/admin/adminCategory";
import CreateCategory from "./pages/admin/createCategory";
import EditCategory from "./pages/admin/adminPutCategory";
import AddProduct from "./pages/admin/product/addProduct";
import AdminProduct from "./pages/admin/product/adminProduct";
import AdminPutProduct from "./pages/admin/product/adminPutProduct";
import { ListUsers } from "./pages/admin/adminuser/listUsers";
import ProductByCategory from "./pages/admin/product/productByCategory";
import ProductDetails from "./pages/admin/product/ProductDetails";
import UserCart from "./pages/admin/cart/UserCart";
import OrderPage from "./pages/order/Order";
import MyOrders from "./pages/order/MyOrders";
import AdminOrders from "./pages/admin/adminOrder/ManageOrder";
import ProtectedRoute from "./services/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/public/product/category/:id" element={<ProductByCategory />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}

          {/* USER Protected Routes */}
          <Route
            path="/product/:id"
            element={<ProtectedRoute element={ProductDetails} allowedRoles={["user"]} />}
          />


          <Route
            path="/user/cart/view"
            element={<ProtectedRoute element={UserCart} allowedRoles={["user"]} />}
          />
          <Route
            path="/user/order"
            element={<ProtectedRoute element={OrderPage} allowedRoles={["user"]} />}
          />
          <Route
            path="/user/myorder"
            element={<ProtectedRoute element={MyOrders} allowedRoles={["user"]} />}
          />

          {/* ADMIN Protected Routes */}
         <Route
            path="/admin"
            element={<ProtectedRoute element={AdminDashboard} allowedRoles={['admin']} />}
          />

          <Route
            path="/admin/category"
            element={<ProtectedRoute element={AdminCategory} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/createCategory"
            element={<ProtectedRoute element={CreateCategory} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/putCategory/:id"
            element={<ProtectedRoute element={EditCategory} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/addProduct"
            element={<ProtectedRoute element={AddProduct} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/adminProduct"
            element={<ProtectedRoute element={AdminProduct} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/adminPutProduct/:id"
            element={<ProtectedRoute element={AdminPutProduct} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/adminPannel"
            element={<ProtectedRoute element={ListUsers} allowedRoles={["admin"]} />}
          />
          <Route
            path="/admin/orders"
            element={<ProtectedRoute element={AdminOrders} allowedRoles={["admin"]} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
