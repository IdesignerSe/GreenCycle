import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleCarousel() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="article-carousel">
      <h2>Articles & Tips</h2>

      <div className="carousel-track">
        {articles.map(a => (
          <Link
            key={a.id}
            to={`/articles/${a.id}`}
            className="carousel-card"
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
