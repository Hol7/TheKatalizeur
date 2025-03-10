import { API_URL, fetchArticleBySlug } from "@/lib/api";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  try {
    const article = await fetchArticleBySlug(params.slug);

    if (!article) {
      return <div className="container mx-auto px-4 py-8">Article not found</div>;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <Image
          src={`${API_URL}${article?.cover?.url || "/default-image.jpg"}`}
          alt={article.title}
          width={800}
          height={0}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        <div
          dangerouslySetInnerHTML={{ __html: article.description || "<p>No content available.</p>" }}
          className="prose lg:prose-xl max-w-none"
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">An error occurred while loading the article.</p>
      </div>
    );
  }
}


// import { API_URL, fetchArticleBySlug } from "@/lib/api";
// import Image from 'next/image';

// export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
 
//   try {
//     const article = await fetchArticleBySlug(params.slug);

//     if (!article) {
//       return <div className="container mx-auto px-4 py-8">Article not found</div>;
//     }
//     // console.log("my article article" ,article)
//     return (
//       <div className="container mx-auto px-4 py-8">
//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

//         {/* Featured Image */}
//         <Image
//         src={`${API_URL}${article?.cover?.url || "/default-image.jpg"}`}
//         alt={article.title}
//         width={800}
//         height={0}
//         // fill
//         // className="object-cover"
//          className="w-full h-96 object-cover rounded-lg mb-6"
//       />

//       {/* <div className="container mx-auto px-4 py-8">
//         <p className="text-black-500">{article.description}</p>
//       </div> */}
//         {/* <img
//           src={article.featuredImage || '/default-image.jpg'}
//           imageUrl={`${API_URL}${heroArticle?.cover?.url || "/default-image.jpg"}`}
//           alt={article.title}
//           className="w-full h-96 object-cover rounded-lg mb-6"
//         /> */}

//         {/* Content */}
//         <div
//           dangerouslySetInnerHTML={{ __html: article.description || '<p>No content available.</p>' }}
//           className="prose lg:prose-xl max-w-none"
//         />
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching article:', error);
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <p className="text-red-500">An error occurred while loading the article.</p>
//       </div>
//     );
//   }
// }