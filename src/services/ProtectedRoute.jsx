import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem("user"));


  if (!userData) {
    return <Navigate to="/user/login" replace />;
  }


  if (allowedRoles && !allowedRoles.includes(userData.role)) {
    return <Navigate to="/" replace />;
  }


  return React.createElement(Component);
};

export default ProtectedRoute;
