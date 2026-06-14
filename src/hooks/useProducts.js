import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function useProducts() {
  const { products, setProducts } = useContext(ProductsContext);

  // Get a single product by ID
  const getProduct = (id) => {
    return products.find((item) => item.id === Number(id));
  };

  // Update a product (price, free, reserved, image, etc.)
  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === Number(id)
          ? { ...item, ...updatedFields }
          : item
      )
    );
  };

  // Add a new product (Admin)
  const addProduct = (newItem) => {
    setProducts((prev) => [...prev, newItem]);
  };

  // Delete a product (Admin)
  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((item) => item.id !== Number(id))
    );
  };

  // Filter: free items only
  const getFreeItems = () => {
    return products.filter((item) => item.free === true);
  };

  // Filter: priced items only
  const getPaidItems = () => {
    return products.filter((item) => item.free === false);
  };

  return {
    products,
    setProducts,
    getProduct,
    updateProduct,
    addProduct,
    deleteProduct,
    getFreeItems,
    getPaidItems,
  };
}