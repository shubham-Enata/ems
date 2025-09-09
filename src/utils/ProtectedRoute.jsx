import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("ems_token"); // or check auth state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
