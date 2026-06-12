// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("greencycle-user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("greencycle-user", JSON.stringify(user));
    }
  }, [user]);

  const login = (alias, email) => {
    const newUser = { alias, email };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("greencycle-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
