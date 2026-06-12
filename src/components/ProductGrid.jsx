import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  if (!items || items.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "var(--gray-700)", marginTop: "24px" }}>
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
        marginTop: "24px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
