import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        padding: "16px",
        textAlign: "center",
        transition: "0.2s",
      }}
    >
      {/* Image */}
      <img
        src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={item.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "var(--radius)",
        }}
      />

      {/* Title */}
      <h3 style={{ marginTop: "12px", color: "var(--gray-900)" }}>
        {item.title}
      </h3>

      {/* Price or Free */}
      {item.free ? (
        <span style={{ color: "var(--free)", fontWeight: "600" }}>FREE</span>
      ) : (
        <span style={{ color: "var(--green)", fontWeight: "600" }}>
          {item.price} kr
        </span>
      )}

      <br />

      {/* Reserved Badge */}
      {item.reserved && (
        <span
          style={{
            color: "var(--reserved)",
            fontWeight: "600",
            display: "block",
            marginTop: "4px",
          }}
        >
          RESERVED
        </span>
      )}

      {/* View Details Button */}
      <Link
        to={`/product/${item.id}`}
        style={{
          display: "block",
          marginTop: "12px",
          background: "var(--green)",
          color: "white",
          padding: "8px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
          boxShadow: "var(--shadow)",
        }}
      >
        View Details
      </Link>
    </div>
  );
}
