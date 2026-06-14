import { Link, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useAuth from "../hooks/useAuth";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { updateProduct } = useProducts();
  const { user } = useAuth();

  const handleReserve = () => {
    if (!user) {
      alert("You must be logged in to reserve an item.");
      navigate("/login");
      return;
    }

    const reservedAt = Date.now();
    const expiresAt = reservedAt + 15 * 60 * 1000;

    const reservation = {
      articleId: item.id,
      alias: user.alias,
      email: user.email,
      mode: item.free ? "Take Away" : "Reservation",
      reservedAt,
      expiresAt,
    };

    // ✅ IMPORTANT: Save reservation for Checkout page
    localStorage.setItem(
      `reservation-${item.id}`,
      JSON.stringify(reservation)
    );

    updateProduct(item.id, {
      reserved: true,
      reservedBy: user.alias,
    });

    navigate(`/checkout/${item.id}`);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${item.id}`}>
        <img
          src={`${import.meta.env.BASE_URL}images/${item.image}`}
          alt={item.title}
          className="product-image"
        />
      </Link>

      <h3 className="product-title">{item.title}</h3>

      {item.free ? (
        <p className="product-price free">FREE</p>
      ) : (
        <p className="product-price">{item.price} kr</p>
      )}

      {item.reserved && <p className="reserved-badge">RESERVED</p>}

      <button
        onClick={handleReserve}
        disabled={item.reserved}
        className="reserve-btn"
      >
        {item.free
          ? item.reserved
            ? "Already Reserved"
            : "Take Away"
          : item.reserved
          ? "Already Reserved"
          : "Reserve"}
      </button>
    </div>
  );
}