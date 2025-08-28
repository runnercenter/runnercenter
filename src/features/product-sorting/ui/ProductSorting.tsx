import { useState } from "react";
import { IoChevronDown } from 'react-icons/io5';

export function ProductSorting() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Самые популярные");
  
  const sortOptions = [
    "Самые популярные",
    "Самые новые", 
    "Самые дешевые",
    "Самые дорогие"
  ];

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setIsSelectOpen(false);
  };

  return (
    <div className="flex w-full mb-5">
      <div className="ml-auto relative">
        <div 
          className={`border border-[#E4E4E4]  px-5 py-2 cursor-pointer flex items-center gap-3 bg-white min-w-[200px] ${isSelectOpen ? 'border-b-white' : 'border-white'} `}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          <span className="text-[#1D1D35] flex-1">{selectedSort}</span>
          <IoChevronDown 
            className={`text-[#6D6D6D] transition-transform duration-300 ${
              isSelectOpen ? 'rotate-180' : 'rotate-0'
            }`}
            size={16}
          />
        </div>
        
        {isSelectOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-[#E4E4E4] border-t-0 z-50">
            {sortOptions.map((option) => (
              <div
                key={option}
                className="px-5 py-2 text-[#6D6D6D] hover:text-[#1D1D35] cursor-pointer transition-colors duration-200"
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
