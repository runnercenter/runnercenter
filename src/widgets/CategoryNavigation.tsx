import { useState } from "react";

export function CategoryNavigation() {
  const [types] = useState<string[]>([
    "Летние", "Зимние", "Gore-tex",
    "Brooks", "Для трейла", "Для марафона",
    "Nike", "С поддержкой стопы", "Чёрные",
    "Красные",
  ]);
  const [selectedType, setSelectedType] = useState<string | null>("Для трейла");

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 px-3 lg:px-0 mt-2">
      {types.map((type) => (
        <div 
          key={type}
          onClick={() => setSelectedType(type)}
          className={`text-[14px] px-5 py-3 lg:mt-5 cursor-pointer select-none ${
            selectedType === type 
            ? 'bg-[#D7DFEF] text-[#1D1D35]' 
            : 'bg-[#EFEFEF] text-[#6D6D6D] hover:bg-[#D7DFEF] hover:text-[#1D1D35] transition-colors duration-300 ease-in-out'
          }`}
        >
          {type}
        </div>
      ))}
    </div>
  );
}
