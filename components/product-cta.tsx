import Link from 'next/link';

interface ProductCTAProps {
  productName: string;
  productLink: string;
  description?: string;
}

export function ProductCTA({ productName, productLink, description }: ProductCTAProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to try {productName}?</h3>
      {description && (
        <p className="text-gray-700 mb-4">{description}</p>
      )}
      <Link
        href={productLink}
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Shop {productName} Now
      </Link>
    </div>
  );
}
