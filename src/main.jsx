import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import AuthProvider from "./context/AuthContext.jsx";
import ProductsProvider from "./context/ProductsContext.jsx";

import "./styles/global.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ProductsProvider>
  </React.StrictMode>
);
