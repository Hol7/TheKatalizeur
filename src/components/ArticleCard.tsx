import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function ArticleCard({ title, excerpt, imageUrl, category, readTime, slug }: ArticleCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4">
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
          {category}
        </span>
        <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
          <Link href={`/article/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {readTime} min read
        </div>
      </div>
    </div>
  );
}