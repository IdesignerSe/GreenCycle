import { createContext, useState, useContext } from "react";
import productsData from "../data/products.json";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  // ✅ Initialize ONCE (no useEffect needed)
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("greencycle-products");
    return stored ? JSON.parse(stored) : productsData;
  });

  // Save to localStorage whenever products change
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem("greencycle-products", JSON.stringify(newProducts));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts: updateProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

// Hook
export function useProducts() {
  return useContext(ProductsContext);
}