// pages/index.tsx
import { API_URL, fetchArticles } from "../lib/api";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";
import InlineAd from "../components/InlineAd";
import PromotionalCard from "../components/PromotionalCard";
import Navbar from "@/components/Navbar";
import { Article } from "@/lib/types/type";
// import { Article } from "../types"; // Import the Article type
// const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
export default async function HomePage() {
  const articles = await fetchArticles();

  console.log("articles tokoss", articles);

  // Extract the first article for the hero section
  const heroArticle = articles[0] as Article | undefined; // Explicitly type as Article or undefined
  const otherArticles = articles as Article[];   // Explicitly type as Article array

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Main Content */}
        <div>
          {/* Hero Section */}
          {heroArticle && (
            <Hero
              title={heroArticle.title || "No Title"}
              excerpt={heroArticle.description || "No Description"}
              imageUrl={`${API_URL}${heroArticle?.cover?.url || "/default-image.jpg"}`} 
              // {heroArticle.cover?.url || "/default-image.jpg"} // Use cover.url directly
              slug={heroArticle.slug || "#"}
            />
          )}

          {/* Promotional Card */}
          <PromotionalCard
            title="Breaking News: Global Summit on Climate Change"
            description="World leaders gather to discuss urgent solutions for a sustainable future."
            imageUrl="/images/promo-card.jpg"
            ctaText="Read More"
            ctaLink="/article/global-summit"
          />

          {/* Article Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((article: Article, index: number) => (
              <>
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.description}
                  imageUrl={`${API_URL}${article?.cover?.url || "/default-image.jpg"}`} 
                  // imageUrl={article.cover?.url || "/default-image.jpg"} // Use cover.url directly
                  category={article.category?.name || "Uncategorized"} // Use category.name directly
                  readTime="5"
                  slug={article.slug}
                />
               
                {index === 2 && <InlineAd />}
              </>
            ))}
          </div>

           {/* Inline Ad after every 3 articles */}
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  );
}