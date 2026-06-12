import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductsProvider from "./context/ProductsContext";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/GreenCycle/">
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BrowserRouter>
  );
}
