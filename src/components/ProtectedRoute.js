import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("TOKEN")) navigate("/login");
  });
  return children;
};

export default ProtectedRoute;
