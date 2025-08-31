import { LuMessagesSquare } from 'react-icons/lu';
import type { Product } from '../../shared/types';
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa6";
import { useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  onToggleLike?: (productId: number) => void;
}

export function ProductCard({ product, onToggleLike }: ProductCardProps) {
  const hasDiscount = product.discountPrice && product.discount;
  const [isClicked, setIsClicked] = useState(false);

  const handleLikeClick = () => {
    if (onToggleLike) {
      onToggleLike(product.id);
    }
  };

  return (
    <div className="relative" onClick={() => setIsClicked(!isClicked)}>
      {/* Main card - always maintains same size */}
      <div className={`block transition-all duration-200 ease-in-out ${isClicked ? ('border border-[#E4E4E4] lg:border-[#C0FD14] lg:relative lg:z-20') : ('border border-[#E4E4E4]')} border-b-0 lg:border-b bg-white`}>
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
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick();
            }}
            className={`absolute top-2 right-2 p-0 rounded-full transition-all duration-300 ease-in-out text-[#E4E4E4] hover:scale-110 transform`}
          >
            {product.isLiked ? (
              <FaHeart className="w-5 h-5 text-[#061A84] transition-all duration-300 ease-in-out transform" />
            ) : (
              <FaRegHeart className="w-5 h-5 transition-all duration-300 ease-in-out transform" />
            )}
          </button>
        </div>

        <div className="lg:p-4 p-2">
          <div className='flex lg:hidden items-center gap-2 mt-2 mb-2'>
            <div className='flex items-center text-[#C0FD14] gap-1'>
              <FaStar size={16} />
            </div>
            <span className='text-[#1D1D35] text-[10px]'>4.8</span>
            <div className='flex items-center gap-1'>
              <LuMessagesSquare className='text-[#D9D9D9]'/>
              <span className='text-[#1D1D35] text-[10px]'>15</span>
            </div>
          </div>
          
          <div className="text-[14px] mb-2 line-clamp-2">
            <div className='hidden lg:block'>Кроссовки</div>
            <div><span className='lg:hidden block'>Кроссовки</span>{product.name}</div>
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
      
      {/* Mobile cart button - always visible */}
      <div className='block lg:hidden text-center bg-[#C0FD14] text-[12px] text-[#1D1D35] border border-[#C0FD14] py-3'>
        В корзину
      </div>
      
      {/* Expanded content overlay - absolutely positioned */}
      <div className={`absolute lg:block hidden top-0 left-0 w-full z-30 bg-white border-2 border-[#C0FD14] transition-all duration-600 ease-in-out ${
        isClicked 
          ? 'opacity-100 transform translate-y-0 scale-100' 
          : 'opacity-0 transform -translate-y-4 scale-95 pointer-events-none'
      }`}>
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
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick();
            }}
            className={`absolute top-2 right-2 p-0 rounded-full transition-all duration-300 ease-in-out text-[#E4E4E4] hover:scale-110 transform`}
          >
            {product.isLiked ? (
              <FaHeart className="w-5 h-5 text-[#061A84] transition-all duration-300 ease-in-out transform" />
            ) : (
              <FaRegHeart className="w-5 h-5 transition-all duration-300 ease-in-out transform" />
            )}
          </button>
        </div>

        <div className="lg:p-4 p-2">
          <div className='flex lg:hidden items-center gap-2 mt-2 mb-2'>
            <div className='flex items-center text-[#C0FD14] gap-1'>
              <FaStar size={16} />
            </div>
            <span className='text-[#1D1D35] text-[10px]'>4.8</span>
            <div className='flex items-center gap-1'>
              <LuMessagesSquare className='text-[#D9D9D9]'/>
              <span className='text-[#1D1D35] text-[10px]'>15</span>
            </div>
          </div>
          
          {/* Desktop rating - always visible in expanded */}
          <div className='lg:flex hidden items-center gap-2 mb-2'>
            <div className='flex items-center text-[#C0FD14] gap-1'>
              <FaStar size={16} />
              <FaStar size={16} />
              <FaStar size={16} />
              <FaStar size={16} />
              <FaStarHalfAlt size={16} />
            </div>
            <span className='text-[#1D1D35] text-[10px]'>4.8</span>
            <div className='flex items-center gap-1'>
              <LuMessagesSquare className='text-[#D9D9D9]'/>
              <span className='text-[#1D1D35] text-[10px]'>15</span>
            </div>
          </div>
          
          <div className="text-[14px] mb-2 line-clamp-2">
            <div className='hidden lg:block'>Кроссовки</div>
            <div><span className='lg:hidden block'>Кроссовки</span>{product.name}</div>
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
          
          {/* Sizes - always visible in expanded */}
          <div className='lg:flex mt-2 flex-wrap hidden gap-2 text-[11px]'>
            <div>размеры US:</div>
            {Array.from({ length: 19 }, (_, i) => (
              <div key={i} className='font-light'>
                {(i * 0.5) + 6}
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop cart button in expanded */}
        <div className='lg:block hidden text-center bg-[#C0FD14] text-[14px] text-[#1D1D35] border border-[#C0FD14] py-3'>
          В корзину
        </div>
      </div>
    </div>
  );
}
