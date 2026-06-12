import ProductGrid from "../components/ProductGrid";
import useProducts from "../hooks/useProducts";

export default function TakeAway() {
  const { getFreeItems } = useProducts();
  const freeItems = getFreeItems();

  return (
    <section style={{ padding: "24px" }}>
      <h2 style={{ color: "var(--gray-900)", marginBottom: "12px" }}>
        Free Take‑Away Items
      </h2>

      <p style={{ color: "var(--gray-700)", marginBottom: "24px" }}>
        These items are completely free. First come, first served.
      </p>

      <ProductGrid items={freeItems} />
    </section>
  );
}
