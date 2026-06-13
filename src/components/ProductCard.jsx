// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  // Prevent crashes if product is missing
  if (!product) {
    return (
      <div className="product-card">
        <p>Product data missing</p>
      </div>
    );
  }

  const { id, name, price, free, image } = product;

  // Build image path safely
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `/images/${image}`
    : "/images/default.png";

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img
          src={imageUrl}
          alt={name}
          className="product-image"
          onError={(e) => (e.target.src = "/images/default.png")}
        />

        <div className="product-info">
          <h3 className="product-name">{name}</h3>

          {free ? (
            <p className="product-free">FREE</p>
          ) : (
            <p className="product-price">{price} kr</p>
          )}
        </div>
      </Link>
    </div>
  );
}
