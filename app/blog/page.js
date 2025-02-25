// pages/blog.js
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Bienvenue sur notre blog !</h1>
      <p>Explorez les derniers articles sur les jeux vidéo, les objets de collection, et plus encore.</p>
      
      {/* Exemple d'articles de blog */}
      <div className="blog-post">
        <h2>Article 1</h2>
        <p>Résumé de l'article 1...</p>
        <Link href="/blog/article-1">Lire plus</Link>
      </div>

      <div className="blog-post">
        <h2>Article 2</h2>
        <p>Résumé de l'article 2...</p>
        <Link href="/blog/article-2">Lire plus</Link>
      </div>
    </div>
  );
};

export default Blog;
