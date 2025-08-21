import type { Product } from '../../shared/types';
import { FaRegHeart, FaHeart } from "react-icons/fa6";

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
    <div className="border border-[#E4E4E4]">
      <div className="relative p-5 py-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover"
        />
        
        {hasDiscount && (
          <div className="absolute bottom-2 left-2 bg-[#C0FD14] text-black px-2 py-1 text-[12px]">
            -{product.discount}%
          </div>
        )}

        <button
          onClick={handleLikeClick}
          className={`absolute top-2 right-2 p-0 rounded-full transition-colors text-[#E4E4E4]`}
        >
          {product.isLiked ? (
            <FaHeart className="w-5 h-5 text-[#061A84]" />
          ) : (
            <FaRegHeart className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="text-[14px] mb-2 line-clamp-2">
          <div>Кроссовки</div>
          <div>{product.name}</div>
        </div>
        
        <div className="flex items-center space-x-2 mt-5">
          {hasDiscount ? (
            <>
              <span className="text-[16px]">
                {product.discountPrice?.toLocaleString()} ₽
              </span>
              <span className="text-[13px] text-[#C1C1C1] line-through font-normal">
                {product.price.toLocaleString()} ₽
              </span>
            </>
          ) : (
            <span className="text-[16px]">
              {product.price.toLocaleString()} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
