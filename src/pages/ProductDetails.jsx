import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useProducts } from "../context/ProductsContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { products } = useProducts();

  // Find the product by ID
  const item = products.find((p) => p.id === Number(id));

  if (!item) {
    return <p>Product not found.</p>;
  }

  // Handle reserve button click
  const handleReserve = () => {
    if (!user) {
      // Redirect to login with return path
      navigate(`/login?redirect=/product/${id}`);
      return;
    }

    // TODO: Add real reservation logic here
    console.log("Reserved:", item.title);
    alert(`You reserved: ${item.title}`);
  };

  return (
    <section className="product-details">
      <div className="details-card">
        <img
          src={item.image}
          alt={item.title}
          className="details-image"
        />

        <div className="details-info">
          <h2>{item.title}</h2>
          <p className="details-description">{item.description}</p>

          <p className="details-meta">
            <strong>Category:</strong> {item.category}
          </p>

          <p className="details-meta">
            <strong>Status:</strong>{" "}
            {item.reserved ? "Already Reserved" : item.free ? "Free" : "Available"}
          </p>

          <button
            onClick={handleReserve}
            disabled={item.reserved}
            className="reserve-btn"
          >
            {item.reserved
              ? "Already Reserved"
              : item.free
              ? "Take Away"
              : "Reserve Item"}
          </button>
        </div>
      </div>
    </section>
  );
}
