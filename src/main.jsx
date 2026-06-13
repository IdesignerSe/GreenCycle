import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import AuthProvider from "./context/AuthContext.jsx";
import "./styles/global.css";
import "./styles/theme.css";


import "./styles/global.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
