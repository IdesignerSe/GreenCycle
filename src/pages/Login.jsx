// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alias.trim() || !email.trim()) {
      setError("Both fields are required.");
      return;
    }

    const result = login(alias, email);

    if (!result.success) {
      setError("Invalid alias or email");
      return;
    }

    // Read redirect parameter from URL
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    // Go back to the page user originally wanted
    navigate(redirect || "/takeaway");
  };

  return (
    <section className="login-container">
      <h2 className="login-title">Alias Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="login-error">{error}</p>}

        <label>Alias</label>
        <input
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </section>
  );
}
