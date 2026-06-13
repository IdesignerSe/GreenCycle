import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));
  const base = import.meta.env.BASE_URL;

  if (!article) {
    return <p>Article not found.</p>;
  }

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
    </section>
  );
}
