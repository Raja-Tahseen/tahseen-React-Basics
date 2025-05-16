import { Outlet, Link } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";

export default function Dashboard() {
  return (
    <AuthWrapper>
      <div>
        <h1>Dashboard</h1>
        <nav>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <Link to="/dashboard">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </AuthWrapper>
  );
}

Dashboard.Profile = function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is your profile page.</p>
    </div>
  );
};

Dashboard.Settings = function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p>Configure your settings here.</p>
    </div>
  );
};
