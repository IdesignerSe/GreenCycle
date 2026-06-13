import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(id);

  if (!product) {
    return (
      <section style={{ padding: "24px", textAlign: "center" }}>
        <h2 style={{ color: "var(--gray-900)" }}>Product not found.</h2>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "16px",
            background: "var(--green)",
            color: "white",
            padding: "10px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Product Image */}
      <img
        src={`${import.meta.env.BASE_URL}images/${product.image}`}
        alt={product.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
        }}
      />

      {/* Title */}
      <h2
        style={{
          marginTop: "20px",
          color: "var(--gray-900)",
          fontSize: "1.8rem",
        }}
      >
        {product.title}
      </h2>

      {/* Price or Free */}
      {product.free ? (
        <p style={{ color: "var(--free)", fontWeight: "600", fontSize: "1.2rem" }}>
          FREE
        </p>
      ) : (
        <p style={{ color: "var(--green)", fontWeight: "600", fontSize: "1.2rem" }}>
          {product.price} kr
        </p>
      )}

      {/* Reserved Badge */}
      {product.reserved && (
        <p
          style={{
            color: "var(--reserved)",
            fontWeight: "600",
            marginTop: "4px",
          }}
        >
          RESERVED
        </p>
      )}

      {/* Description */}
      <p
        style={{
          marginTop: "16px",
          color: "var(--gray-700)",
          lineHeight: "1.6",
        }}
      >
        {product.description}
      </p>

      {/* Back Button */}
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "24px",
          background: "var(--green)",
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
          boxShadow: "var(--shadow)",
        }}
      >
        Back to Home
      </Link>
    </section>
  );
}
