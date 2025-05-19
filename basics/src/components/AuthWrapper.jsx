import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function AuthWrapper({ children }) {
  const [isAuthenticated] = useState(false); // Need to replace with real auth logic
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
