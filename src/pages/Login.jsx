import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alias.trim() || !email.trim()) return;

    login(alias, email);
    alert("Logged in successfully!");
  };

  return (
    <section
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "24px",
        background: "white",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)"
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "var(--gray-900)" }}>
        Alias Login
      </h2>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Alias
        </label>
        <input
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid var(--gray-300)"
          }}
        />

        <label style={{ display: "block", marginBottom: "8px" }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid var(--gray-300)"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--green)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "var(--shadow)"
          }}
        >
          Login
        </button>
      </form>
    </section>
  );
}
