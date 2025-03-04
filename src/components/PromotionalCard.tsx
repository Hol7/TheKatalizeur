import Image from 'next/image';

interface PromotionalCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export default function PromotionalCard({ title, description, imageUrl, ctaText, ctaLink }: PromotionalCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg mt-10">
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <a
          href={ctaLink}
          className="bg-primary px-6 py-3 rounded-md hover:bg-opacity-90 transition"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}