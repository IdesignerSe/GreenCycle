// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to home
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          GreenCycle
        </NavLink>

        <NavLink to="/takeaway" className="nav-link">
          TakeAway
        </NavLink>

        <NavLink to="/secondhand" className="nav-link">
          SecondHand
        </NavLink>
      </div>

      <div className="nav-right">
        {!user && (
          <NavLink to="/login" className="nav-link login-btn">
            Login
          </NavLink>
        )}

        {user && (
          <div className="user-area">
            <span className="user-alias">Hi, {user.alias}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
