import { useParams, Link, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useAuth from "../hooks/useAuth";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProduct, updateProduct } = useProducts();
  const { user } = useAuth();

  const product = getProduct(id);

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

  // -----------------------------
  // Reserve Button Logic
  // -----------------------------
  const handleReserve = () => {
    if (!user) {
      alert("You must be logged in to reserve an item.");
      navigate("/login");
      return;
    }

    updateProduct(id, {
      reserved: true,
      reservedBy: user.alias,
    });

    navigate(`/checkout/${id}`);
  };

  return (
    <section style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Product Image */}
      <img
        src={`${import.meta.env.BASE_URL}images/${product.image}`}
        alt={product.title}
        onError={(e) => {
          e.target.src = `${import.meta.env.BASE_URL}images/placeholder.jpg`;
        }}
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

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        disabled={product.reserved}
        style={{
          marginTop: "24px",
          width: "100%",
          padding: "12px",
          background: product.reserved ? "var(--gray-400)" : "var(--green)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: product.reserved ? "not-allowed" : "pointer",
          boxShadow: "var(--shadow)",
        }}
      >
        {product.free
          ? product.reserved
            ? "Already Reserved"
            : "Take Away"
          : product.reserved
            ? "Already Reserved"
            : "Reserve Item"}
      </button>

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
