import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function Checkout() {
  const { id } = useParams();
  const { getProduct } = useProducts();

  const product = getProduct(id);

  console.log("IMAGE PATH:", `${import.meta.env.BASE_URL}images/${product?.image}`);
  console.log("PRODUCT IMAGE VALUE:", product?.image);

  const reservation = JSON.parse(
    localStorage.getItem(`reservation-${id}`)
  );

  console.log("Checkout ID:", id);
  console.log("Looking for key:", `reservation-${id}`);
  console.log("LocalStorage keys:", Object.keys(localStorage));

  if (!reservation) {
    return (
      <section style={{ padding: "24px" }}>
        <h2>No reservation found</h2>
        <Link to="/" className="back-btn">
          Back to items
        </Link>
      </section>
    );
  }

  const reservedAtDate = new Date(reservation.reservedAt);
  const expiresAtDate = new Date(reservation.expiresAt);

  return (
    <section style={{ padding: "24px" }}>
      <h2>Reservation Confirmed</h2>

      {product && (
        <>
          <h3>{product.title}</h3>

          <img
            src={`${import.meta.env.BASE_URL}images/${product.image}`}
            alt={product.title}
            style={{
              width: "250px",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />

          <p>
            <strong>
              {product.free ? "FREE" : `${product.price} kr`}
            </strong>
          </p>
        </>
      )}

      <p>Your item has been reserved successfully.</p>

      <p>
        <strong>Reserved by:</strong> {reservation.alias} (
        {reservation.email})
      </p>

      <p>
        <strong>Mode:</strong> {reservation.mode}
      </p>

      {product && (
        <p>
          <strong>Item:</strong> {product.title}
        </p>
      )}

      <p>
        <strong>Time:</strong>{" "}
        {reservedAtDate.toLocaleString()}
      </p>

      <p>
        <strong>Expires at:</strong>{" "}
        {expiresAtDate.toLocaleString()}
      </p>

      <br />

      <Link to="/" className="back-btn">
        Back to items
      </Link>
    </section>
  );
}