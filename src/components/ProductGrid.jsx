// src/components/ProductGrid.jsx
import ProductCard from "./ProductCard";

export default function ProductGrid({ items = [] }) {
  if (!items.length) {
    return (
      <p style={{ color: "var(--gray-700)", padding: "16px" }}>
        No items available.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
