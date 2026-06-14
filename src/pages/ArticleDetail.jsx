import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import useAuth from "../hooks/useAuth";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const article = articles.find(a => a.id === Number(id));
  const base = import.meta.env.BASE_URL;

  if (!article) {
    return <p>Article not found.</p>;
  }

  const handleReserve = () => {
    if (!user) {
      // If not logged in → redirect to login with redirect back
      navigate(`/login?redirect=/articles/${id}`);
      return;
    }

    const reservedAt = Date.now();
    const expiresAt = reservedAt + 15 * 60 * 1000; // +15 minutes

    const reservation = {
      articleId: article.id,
      alias: user.alias,
      email: user.email,
      mode: "Reservation",
      reservedAt,
      expiresAt
    };

    localStorage.setItem(`reservation-${article.id}`, JSON.stringify(reservation));

    navigate(`/checkout/${article.id}`);
  };

  return (
    <section className="article-detail">
      <img
        src={`${base}images/${article.image}`}
        alt={article.title}
        className="article-detail-image"
      />

      <h1>{article.title}</h1>

      <p className="article-detail-content">
        {article.content}
      </p>

      <button className="reserve-btn" onClick={handleReserve}>
        Reserve for 15 minutes
      </button>
    </section>
  );
}
