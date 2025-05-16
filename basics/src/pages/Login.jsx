import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    // In a real app, user need to authenticate first
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
