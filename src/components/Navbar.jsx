import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo" onClick={closeMenu}>
            GreenCycle
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/takeaway" className="nav-link" onClick={closeMenu}>TakeAway</Link></li>
          <li><Link to="/secondhand" className="nav-link" onClick={closeMenu}>SecondHand</Link></li>
          <li><Link to="/articles" className="nav-link" onClick={closeMenu}>Articles & Tips</Link></li>
        </ul>

        <div className="nav-right">

          {/* USER AREA (DESKTOP) */}
          <div className="user-area">
            {user ? (
              <>
                <span className="alias">{user.alias}</span>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </>
            ) : (
              <Link to="/login" className="login-btn">Login</Link>
            )}
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={open ? "bar bar1 open" : "bar bar1"}></div>
            <div className={open ? "bar bar2 open" : "bar bar2"}></div>
            <div className={open ? "bar bar3 open" : "bar bar3"}></div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/takeaway" onClick={closeMenu}>TakeAway</Link>
        <Link to="/secondhand" onClick={closeMenu}>SecondHand</Link>
        <Link to="/articles" onClick={closeMenu}>Articles & Tips</Link>

        {/* USER AREA (MOBILE) */}
        {user ? (
          <div className="mobile-user">
            <p className="alias">{user.alias}</p>
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                closeMenu();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" onClick={closeMenu}>Login</Link>
        )}
      </div>
    </>
  );
}
