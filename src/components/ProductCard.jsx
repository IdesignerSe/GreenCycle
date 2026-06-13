import { Link, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useAuth from "../hooks/useAuth";

export default function ProductCard({ id, title, image, price, free, reserved }) {
  const navigate = useNavigate();
  const { updateProduct } = useProducts();
  const { user } = useAuth();

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
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img
          src={`${import.meta.env.BASE_URL}images/${image}`}
          alt={title}
          className="product-image"
        />
      </Link>

      <h3 className="product-title">{title}</h3>

      {free ? (
        <p className="product-price free">FREE</p>
      ) : (
        <p className="product-price">{price} kr</p>
      )}

      {reserved && <p className="reserved-badge">RESERVED</p>}

      {/* ⭐ Reserve Button */}
      <button
        onClick={handleReserve}
        disabled={reserved}
        className="reserve-btn"
      >
        {free
          ? reserved
            ? "Already Reserved"
            : "Take Away"
          : reserved
            ? "Already Reserved"
            : "Reserve"}
      </button>
    </div>
  );
}
