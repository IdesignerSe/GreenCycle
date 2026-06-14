import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();

  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <section style={{ padding: "24px", textAlign: "center" }}>
        <h2>Article not found.</h2>

        <Link to="/articles">Back to Articles</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/${article.image}`}
        alt={article.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h1 style={{ marginTop: "20px" }}>{article.title}</h1>

      <p style={{ marginTop: "12px", lineHeight: "1.6" }}>
        {article.description}
      </p>
      <p style={{ marginTop: "12px", lineHeight: "1.6" }}>
        {article.content}
      </p>
      
      <Link
        to="/articles"
        style={{
          display: "inline-block",
          marginTop: "24px",
          background: "var(--green)",
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Back to Articles
      </Link>
    </section>
  );
}