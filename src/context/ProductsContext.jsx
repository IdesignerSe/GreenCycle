import { createContext, useState, useEffect, useContext } from "react";
import productsData from "../data/products.json";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  // FIX: load initial products immediately
  const [products, setProducts] = useState(productsData);

  // Load from localStorage or fallback to JSON
  useEffect(() => {
    const stored = localStorage.getItem("greencycle-products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("greencycle-products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Hook
export function useProducts() {
  return useContext(ProductsContext);
}
