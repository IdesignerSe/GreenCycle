import { useParams, Link } from "react-router-dom";

export default function Checkout() {
  const { id } = useParams();

  const reservation = JSON.parse(
    localStorage.getItem(`reservation-${id}`)
  );

  console.log("Checkout ID:", id);
  console.log("Reservation:", reservation);
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

      {/* PRODUCT INFO (from snapshot) */}
      <h3>{reservation.title}</h3>

      <img
        src={`${import.meta.env.BASE_URL}images/${reservation.image}`}
        alt={reservation.title}
        style={{
          width: "250px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />

      <p>
        <strong>
          {reservation.free
            ? "FREE"
            : `${reservation.price} kr`}
        </strong>
      </p>

      <p>Your item has been reserved successfully.</p>

      <p>
        <strong>Reserved by:</strong> {reservation.alias} (
        {reservation.email})
      </p>

      <p>
        <strong>Mode:</strong> {reservation.mode}
      </p>

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