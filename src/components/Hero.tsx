import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

export default function Hero({ title, excerpt, imageUrl, slug }: HeroProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        // width={100}
        // height={100}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-start p-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{excerpt}</p>
        <Link href={`/article/${slug}`} className="bg-primary px-6 py-3 rounded-md text-white font-semibold hover:bg-opacity-90 transition">
          Read More →
        </Link>
      </div>
    </div>
  );
}