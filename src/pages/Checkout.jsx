import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

export default function Checkout() {
  const { id } = useParams();

  // Ensure ID is a string
  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    return (
      <section style={{ padding: "24px" }}>
        <h2>Item not found</h2>
        <p>The item you tried to reserve does not exist.</p>
        <Link to="/takeaway" style={{ color: "var(--green)" }}>
          Go back
        </Link>
      </section>
    );
  }

  return (
    <section style={{ padding: "24px" }}>
      <h2>Reservation Confirmed</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        background: "#fafafa",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <img
          src={`${import.meta.env.BASE_URL}images/${product.image}`}
          alt={product.title}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />

        <div>
          <h3>{product.title}</h3>

          {product.free ? (
            <p style={{ color: "var(--green)", fontWeight: "600" }}>FREE</p>
          ) : (
            <p style={{ fontWeight: "600" }}>{product.price} kr</p>
          )}

          <p style={{ marginTop: "12px", color: "#555" }}>
            Your item has been reserved successfully.
          </p>

          <Link to="/takeaway" style={{ color: "var(--green)", fontWeight: "600" }}>
            Back to items
          </Link>
        </div>
      </div>
    </section>
  );
}
