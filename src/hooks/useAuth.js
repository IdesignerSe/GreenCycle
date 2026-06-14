import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import users from "../data/users.json";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const login = (alias, email) => {
    // Try to find existing user
    const existing = users.find(
      u =>
        u.alias.toLowerCase() === alias.toLowerCase() &&
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      setUser(existing);
      return { success: true };
    }

    // Auto-register new user (optional)
    const newUser = {
      id: users.length + 1,
      alias,
      email
    };

    // NOTE: This only updates in memory, not the JSON file
    setUser(newUser);

    return { success: true, newUser: true };
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
