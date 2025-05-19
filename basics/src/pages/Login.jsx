import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthWrapper";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleAuth } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    toggleAuth(); // This will set isAuthenticated to true
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>You must log in to view the page at {from}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
