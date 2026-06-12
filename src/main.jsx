import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.jsx";

import "./styles/global.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/GreenCycle/">
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </BrowserRouter>
);
