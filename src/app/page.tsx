import { fetchArticles } from '../lib/api';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';

export default async function HomePage() {
  const articles = await fetchArticles();

  // Extract the first article for the hero section
  const heroArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {heroArticle && (
        <Hero
          title={heroArticle.attributes.title}
          excerpt={heroArticle.attributes.excerpt}
          imageUrl={heroArticle.attributes.featuredImage.data.attributes.url}
          slug={heroArticle.attributes.slug}
        />
      )}

      {/* Article Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherArticles.map((article: any) => (
          <ArticleCard
            key={article.id}
            title={article.attributes.title}
            excerpt={article.attributes.excerpt}
            imageUrl={article.attributes.featuredImage.data.attributes.url}
            category={article.attributes.category.data.attributes.name}
            readTime="5"
            slug={article.attributes.slug}
          />
        ))}
      </div>
    </div>
  );
}