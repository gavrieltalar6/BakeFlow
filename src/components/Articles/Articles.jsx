import { ARTICLES, MASCOT } from "../../data/data";
import { useNavigate } from "react-router-dom";

import "./Articles.css";

function Articles() {
  
const navigate = useNavigate();

  return (
    <section className="articles-section">
      <div className="articles-label">
        <h2>Articles</h2>
        <div className="articles-mascot">
          <img src={MASCOT} alt="mascot" />
        </div>
      </div>

      <div className="articles-scroll-wrapper">
        <div className="articles-track">
          {ARTICLES.map((article) => (
            <div
              className="article-card"
              key={article.id}
              onClick={() => navigate(`/article/${article.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="article-card-header">
                <h3>
                  <b>{article.title}</b>
                </h3>
                <img
                  src={article.sticker}
                  alt="sticker"
                  className="article-sticker"
                />
              </div>
              <div className="article-card-body">
                <div className="article-image-side">
                  <img src={article.image} alt={article.title} />
                </div>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
