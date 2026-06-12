import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const { getProduct } = useProducts();

  const item = getProduct(id);

  if (!item) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px", color: "var(--gray-700)" }}>
        Item not found.
      </p>
    );
  }

  return (
    <section
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "24px",
        background: "white",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)"
      }}
    >
      {/* Image */}
      <img
        src={item.image || "https://via.placeholder.com/600x400?text=No+Image"}
        alt={item.title}
        style={{
          width: "100%",
          borderRadius: "var(--radius)",
          marginBottom: "20px",
          objectFit: "cover"
        }}
      />

      {/* Title */}
      <h2 style={{ color: "var(--gray-900)", marginBottom: "8px" }}>
        {item.title}
      </h2>

      {/* Description */}
      <p style={{ color: "var(--gray-700)", marginBottom: "16px" }}>
        {item.description}
      </p>

      {/* Price or Free */}
      {item.free ? (
        <p style={{ color: "var(--free)", fontWeight: "600", fontSize: "18px" }}>
          FREE
        </p>
      ) : (
        <p style={{ color: "var(--green)", fontWeight: "600", fontSize: "18px" }}>
          {item.price} kr
        </p>
      )}

      {/* Reserved Badge */}
      {item.reserved && (
        <p style={{ color: "var(--reserved)", fontWeight: "600", marginTop: "8px" }}>
          RESERVED
        </p>
      )}

      {/* CTA Button */}
      <button
        style={{
          marginTop: "24px",
          width: "100%",
          padding: "12px",
          background: "var(--green)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          boxShadow: "var(--shadow)"
        }}
        disabled={item.reserved}
      >
        {item.free ? "Take Away" : item.reserved ? "Already Reserved" : "Reserve Item"}
      </button>
    </section>
  );
}
