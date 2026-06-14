// src/pages/Checkout.jsx
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Checkout() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return <p>Item not found.</p>;
  }

  // Load reservation from localStorage
  const reservation = JSON.parse(
    localStorage.getItem(`reservation-${id}`)
  );

  if (!reservation) {
    return (
      <section style={{ padding: "24px" }}>
        <h2>No reservation found</h2>
        <Link to="/articles">Back to items</Link>
      </section>
    );
  }

  // Convert timestamps
  const reservedAtDate = new Date(reservation.reservedAt);
  const expiresAtDate = new Date(reservation.expiresAt);

  return (
    <section style={{ padding: "24px" }}>
      <h2>Reservation Confirmed</h2>

      <h3>{article.title}</h3>

      <img
        src={`${import.meta.env.BASE_URL}images/${article.image}`}
        alt={article.title}
        style={{ width: "250px", borderRadius: "8px", marginBottom: "16px" }}
      />

      <p><strong>FREE</strong></p>

      <p>Your item has been reserved successfully.</p>

      <p><strong>Reserved by:</strong> {reservation.alias} ({reservation.email})</p>

      <p><strong>Mode:</strong> {reservation.mode}</p>

      <p><strong>Item:</strong> {article.title}</p>

      <p><strong>Time:</strong> {reservedAtDate.toLocaleString()}</p>

      <p><strong>Time reserved expires at:</strong> {expiresAtDate.toLocaleString()}</p>

      <br />

      <Link to="/articles" className="back-btn">
        Back to items
      </Link>
    </section>
  );
}
