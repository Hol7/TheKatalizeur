import Image from 'next/image';

export default function InlineAd() {
  return (
    <div className="col-span-full md:col-span-3 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
      <Image
        src="/ads/inline-ad.jpg"
        alt="Inline Ad"
        width={300}
        height={250}
        className="mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">Sponsored Content</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Discover the latest trends in technology and innovation.
      </p>
      <a
        href="#"
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
      >
        Learn More →
      </a>
    </div>
  );
}