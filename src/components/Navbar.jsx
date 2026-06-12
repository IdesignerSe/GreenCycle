import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        background: "white",
        boxShadow: "var(--shadow)"
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "var(--green)",
          textDecoration: "none"
        }}
      >
        GreenCycle
      </Link>

      {/* Menu */}
      <div style={{ display: "flex", gap: "24px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "var(--green)" : "var(--gray-900)",
            textDecoration: "none",
            fontWeight: "500"
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/takeaway"
          style={({ isActive }) => ({
            color: isActive ? "var(--green)" : "var(--gray-900)",
            textDecoration: "none",
            fontWeight: "500"
          })}
        >
          Take‑Away
        </NavLink>

        <NavLink
          to="/secondhand"
          style={({ isActive }) => ({
            color: isActive ? "var(--green)" : "var(--gray-900)",
            textDecoration: "none",
            fontWeight: "500"
          })}
        >
          Second‑Hand
        </NavLink>
      </div>
    </nav>
  );
}
