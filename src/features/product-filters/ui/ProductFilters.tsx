import { useState } from "react";
import { IoChevronDown } from 'react-icons/io5';
import { CheckBoxFilter } from "../../../shared/ui/CheckBoxFilter";
import { PriceFilter, ColorFilter, SizeFilter, IphoneToggle, BrandFilter } from "../../../entities/filters";

type Filter = {
  name: string;
  isOpen: boolean;
}

export function ProductFilters() {
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

  const toggleFilter = (filterName: string) => {
    setFilters(prev => prev.map(filter => 
      filter.name === filterName 
        ? { ...filter, isOpen: !filter.isOpen }
        : filter
    ));
  };

  return (
    <div className="hidden lg:block lg:w-[25%] pr-10">
      <div className="flex flex-col gap-[20px] pb-[30px] mb-[30px] border-b border-[#E4E4E4]">
        <div className="text-[16px] text-[#1D1D35] font-light">Для мужчин</div>
        <div className="text-[16px] text-[#1D1D35] font-light">Для женщин</div>
        <div className="text-[16px] text-[#1D1D35] font-light">Для детей</div>
      </div>
      <div className="flex flex-col gap-y-[30px]">
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
        <div className="text-center cursor-pointer text-white bg-[#061A84] px-10 py-3">
          Применить
        </div>
        <div className="font-light text-[#A1A1A1] text-center cursor-pointer underline">
          Сбросить фильтры
        </div>
      </div>
    </div>
  );
}
