import { fetchArticleBySlug } from "@/lib/api";


export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await fetchArticleBySlug(params.slug);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.attributes.title}</h1>
      <img
        src={article.attributes.featuredImage.data.attributes.url}
        alt={article.attributes.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <div dangerouslySetInnerHTML={{ __html: article.attributes.content }} />
    </div>
  );
}