import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

export default function Checkout() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <section style={{ padding: "24px" }}>
        <h2>Item not found</h2>
        <Link to="/takeaway">Go back</Link>
      </section>
    );
  }

  return (
    <section className="checkout-container">
      <h2>Reservation Confirmed</h2>

      <div className="checkout-card">
        <img
          src={`${import.meta.env.BASE_URL}images/${product.image}`}
          alt={product.title}
          className="checkout-image"
        />

        <div className="checkout-info">
          <h3>{product.title}</h3>

          {product.free ? (
            <p className="checkout-price free">FREE</p>
          ) : (
            <p className="checkout-price">{product.price} kr</p>
          )}

          <p className="checkout-message">
            Your item has been reserved successfully.
          </p>

          <Link to="/takeaway" className="checkout-back">
            Back to items
          </Link>
        </div>
      </div>
    </section>
  );
}
