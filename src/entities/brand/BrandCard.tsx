import type { Brand } from '../../shared/types';

interface BrandCardProps {
  brand: Brand;
  onClick?: (brandId: number) => void;
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(brand.id);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square p-6 flex items-center justify-center bg-gray-50">
        <img
          src={brand.image}
          alt={brand.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {brand.name}
        </h3>
      </div>
    </div>
  );
}
