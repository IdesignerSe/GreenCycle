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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "24px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
