import type { Product } from '../../shared/types';

interface ProductCardProps {
  product: Product;
  onToggleLike?: (productId: number) => void;
}

export function ProductCard({ product, onToggleLike }: ProductCardProps) {
  const hasDiscount = product.discountPrice && product.discount;

  const handleLikeClick = () => {
    if (onToggleLike) {
      onToggleLike(product.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={handleLikeClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            product.isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          {hasDiscount ? (
            <>
              <span className="text-xl font-bold text-red-600">
                {product.discountPrice?.toLocaleString()} ₸
              </span>
              <span className="text-lg text-gray-500 line-through">
                {product.price.toLocaleString()} ₸
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              {product.price.toLocaleString()} ₸
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
          В корзину
        </button>
      </div>
    </div>
  );
}
