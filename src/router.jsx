// src/router.jsx
import App from "./App";
import ProductsProvider from "./context/ProductsContext";

export default function AppRouter() {
  return (
    <ProductsProvider>
      <App />
    </ProductsProvider>
  );
}
