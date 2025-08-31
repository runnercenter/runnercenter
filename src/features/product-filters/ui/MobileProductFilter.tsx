import { useState, useEffect } from "react";
import { BsSliders } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { BrandFilter, ColorFilter, IphoneToggle, PriceFilter, SizeFilter } from "../../../entities";
import { CheckBoxFilter } from "../../../shared/ui/CheckBoxFilter";

interface MobileProductFilterProps {
    onClose: () => void;
}

type Filter = {
  name: string;
  isOpen: boolean;
}

export default function MobileProductFilter({ onClose }: MobileProductFilterProps) {
    const [filters, setFilters] = useState<Filter[]>([
        { name: "Цена", isOpen: true },
        { name: "Сезон", isOpen: true },
        { name: "Тип активности", isOpen: true },
        { name: "Пол", isOpen: true },
        { name: "Размер", isOpen: true },
        { name: "Цвет", isOpen: true },
        { name: "Наличие мембраны", isOpen: true },
        { name: "Пронация", isOpen: true },
        { name: "Бренд", isOpen: true },
    ]);

    // Prevent body scroll when filter is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const toggleFilter = (filterName: string) => {
        setFilters(prev => prev.map(filter => 
        filter.name === filterName 
            ? { ...filter, isOpen: !filter.isOpen }
            : filter
        ));
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
            {/* Header - Fixed */}
            <div className="flex items-center p-4 text-[12px] bg-white border-b border-[#E4E4E4] flex-shrink-0">
                <div className="font-light text-[#A1A1A1]">Сбросить</div>
                <div className="flex items-center mx-auto gap-2">
                    <BsSliders size={14}/>
                    <div className="text-[12px] font-light">Фильтры</div>
                </div>
                <button 
                    onClick={onClose}
                    className="ml-auto text-lg"
                >
                    ✕
                </button>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-[20px] px-4 mt-4 pb-[30px] mb-[30px] border-b border-[#E4E4E4]">
                    <div className="text-[16px] text-[#1D1D35] font-light">Для мужчин</div>
                    <div className="text-[16px] text-[#1D1D35] font-light">Для женщин</div>
                    <div className="text-[16px] text-[#1D1D35] font-light">Для детей</div>
                </div>
                <div className="flex flex-col gap-y-[30px] px-4 pb-8">
                    {filters.map((filter) => (
                    <div key={filter.name}>
                        <div className="flex items-center cursor-pointer" onClick={() => toggleFilter(filter.name)}>
                        <div className="text-[16px] text-[#1D1D35] font-light">{filter.name}</div> 
                        <IoChevronDown
                            className={`text-[#6D6D6D] transition-transform duration-300 ml-auto ${
                            filter.isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                            size={16}
                        />
                        </div>
                        {filter.isOpen && (
                        <div className="mt-4">
                            {filter.name === "Цена" && <PriceFilter />}
                            {filter.name === "Размер" && <SizeFilter />}
                            {filter.name === "Цвет" && <ColorFilter />}
                            {filter.name === "Сезон" && (
                            <CheckBoxFilter values={["Лето", "Зима", "Весна", "Осень"]} />
                            )}
                            {filter.name === "Тип активности" && (
                            <CheckBoxFilter values={["Тренировки", "Трейлраннинг", "Марафон"]} />
                            )}
                            {filter.name === "Пол" && (
                            <CheckBoxFilter values={["Женский", "Мужской"]} />
                            )}
                            {filter.name === "Наличие мембраны" && (
                            <CheckBoxFilter values={["Без мембраны", "С мембраной"]} />
                            )}
                            {filter.name === "Пронация" && (
                            <CheckBoxFilter values={["Без поддержки", "С поддержкой"]} />
                            )}
                            {filter.name === "Бренд" && <BrandFilter />}
                        </div>
                        )}
                    </div>
                    ))}
                    <IphoneToggle name="Новая коллекция" />
                    <IphoneToggle name="Товары со скидкой" />
                </div>
            </div>
            
            {/* Footer Button - Fixed */}
            <div className="px-4 py-4 bg-white border-t border-[#E4E4E4] flex-shrink-0">
                <div 
                    onClick={onClose}
                    className="text-center py-4 text-white bg-[#061A84] cursor-pointer"
                >
                    Применить
                </div>
            </div>
        </div>
    )
}