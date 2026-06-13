import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Articles() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="articles-page">
      <h1>Articles & Tips</h1>

      <div className="articles-grid">
        {articles.map(a => (
          <Link
            key={a.id}
            to={`/articles/${a.id}`}
            className="article-card"
          >
            <img src={`${base}images/${a.image}`} alt={a.title} />
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
