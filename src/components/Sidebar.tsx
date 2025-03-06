import { API_URL, fetchSidebar } from '@/lib/api';
import { Article } from '@/lib/types/type';
import Image from 'next/image';

export default async function Sidebar() {
  try {
    const article = await fetchSidebar();
    console.log("my article side", article)

    if (!article) {
      return <div className="container mx-auto px-4 py-8">Article not found</div>;
    }
    return (
      <aside className="hidden md:block w-64 space-y-6 sticky top-8">
        {/* Ad Banner */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/ads/banner-ad.jpg"
            alt="Ad Banner"
            width={300}
            height={250}
            className="w-full h-auto object-cover"
          />
        </div>
  
        {/* Newsletter Signup */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get the latest news and updates delivered straight to your inbox.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
  
        {/* Trending Articles */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Trending Articles</h3>
          <ul className="space-y-2">
            {article.map((article: Article)=>{

              return(
                <li className="flex items-start" key={article.id}>
                <Image
                 src={`${API_URL}${article?.cover?.url || "/default-image.jpg"}`}
                  alt="Article Thumbnail"
                  width={50}
                  height={50}
                  className="rounded-md mr-3"
                />
                <div>
                  <a href="#" className="text-sm font-medium hover:text-primary">
                  {article.title}
                  </a>
                  <p className="text-xs text-gray-500">5 min read</p>
                </div>
              </li>
              )
            })}
            {/* <li className="flex items-start">
              <Image
                src="/images/article-thumb-1.jpg"
                alt="Article Thumbnail"
                width={50}
                height={50}
                className="rounded-md mr-3"
              />
              <div>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  How AI is Transforming Industries
                </a>
                <p className="text-xs text-gray-500">5 min read</p>
              </div>
            </li>
            <li className="flex items-start">
              <Image
                src="/images/article-thumb-2.jpg"
                alt="Article Thumbnail"
                width={50}
                height={50}
                className="rounded-md mr-3"
              />
              <div>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  The Future of Renewable Energy
                </a>
                <p className="text-xs text-gray-500">7 min read</p>
              </div>
            </li> */}
          </ul>
        </div>
      </aside>
    );
  } catch (error) {
    console.log("error",error)

  }
  
  
}