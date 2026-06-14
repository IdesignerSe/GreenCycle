import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("greencycle-user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("greencycle-user", JSON.stringify(user));
    }
  }, [user]);

  const login = (alias, email) => {
    setUser({ alias, email });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("greencycle-user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
