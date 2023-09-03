import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();
  console.log("protected ");
  console.log(user);
  if (user) {
    return children;
  }
  
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
