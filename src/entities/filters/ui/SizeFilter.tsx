import { useState } from "react";

export function SizeFilter() {
  const [selectedSize, setSelectedSize] = useState<number>(3);

  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 7 }, (_, i) => i + 1).map(size => {
        const value = 5 + (size * 0.5);
        return (
          <div 
            key={size} 
            className={`cursor-pointer text-center border px-3 py-3 text-[13px] font-light transition-all duration-200 ${
              selectedSize == size ? 'border-[#6D6D6D] text-[#6D6D6D]' : 'text-[#A1A1A1] border-[#E4E4E4]'
            }`} 
            onClick={() => setSelectedSize(size)}
          >
            US {value.toFixed(1)}
          </div>
        );
      })}
    </div>
  );
}
