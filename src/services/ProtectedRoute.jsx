import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem("user"));

  // If not logged in
  if (!userData) {
    return <Navigate to="/user/login" replace />;
  }

  // If logged in but not allowed (role mismatch)
  if (allowedRoles && !allowedRoles.includes(userData.role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ FIX: Explicitly render the element using React.createElement
  return React.createElement(Component);
};

export default ProtectedRoute;
