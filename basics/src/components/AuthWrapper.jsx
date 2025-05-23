import { Navigate, useLocation } from "react-router-dom";
import { createContext, useContext, useState } from "react";

// Create an AuthContext to share auth state
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthWrapper({ children }) {
  // const { isAuthenticated } = useAuth();
  // const location = useLocation();

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
}
