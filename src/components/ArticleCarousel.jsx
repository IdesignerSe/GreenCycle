export default function ArticleCarousel() {
  const base = import.meta.env.BASE_URL;
  const articles = [
    {
      id: 1,
      title: "How to Upcycle Old Furniture",
      image: "article1.jpg",
      description: "Simple ways to give old items a new life."
    },
    {
      id: 2,
      title: "Reduce Food Waste at Home",
      image: "article2.jpg",
      description: "Practical tips to save food and money."
    },
    {
      id: 3,
      title: "Why Second-Hand is the Future",
      image: "article3.jpg",
      description: "Sustainable shopping is growing fast."
    }
  ];

  return (
    <section className="article-carousel">
      <h2>Articles & Tips</h2>

      <div className="carousel-track">
        {articles.map(a => (
          <div key={a.id} className="carousel-card">
            <img
              src={`${base}images/${a.image}`}
              alt={a.title}
            />
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
