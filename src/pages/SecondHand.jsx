import ProductGrid from "../components/ProductGrid";
import useProducts from "../hooks/useProducts";

export default function SecondHand() {
  const { getPaidItems } = useProducts();
  const paidItems = getPaidItems();

  return (
    <section style={{ padding: "24px" }}>
      <h2 style={{ color: "var(--gray-900)", marginBottom: "12px" }}>
        Second‑Hand Items for Sale
      </h2>

      <p style={{ color: "var(--gray-700)", marginBottom: "24px" }}>
        Affordable pre‑loved items available for reservation.  
        Login with your alias to reserve an item.
      </p>

      <ProductGrid items={paidItems} />
    </section>
  );
}
