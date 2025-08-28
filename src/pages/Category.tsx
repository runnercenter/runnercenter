import { useState } from "react";


function IphoneToggle({ name }: { name: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="text-[16px] text-[#1D1D35] font-light">{name}</div>
      <button
        type="button"
        aria-pressed={on}
        onClick={() => setOn(v => !v)}
        className={`w-12 ml-auto h-7 rounded-full flex  items-center transition-colors duration-300 focus:outline-none ${on ? 'bg-[#061A84]' : 'bg-[#D9D9D9]'}`}
        style={{ minWidth: 44 }}
      >
        <span
          className={`inline-block w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${on ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'}`}
        />
      </button>
    </div>
  );
}

import { GridContainer, Layout, useProducts } from "../shared"
import { ProductCard } from "../entities";
import { IoChevronDown } from 'react-icons/io5';
import { CheckBoxFilter } from "../shared/ui/CheckBoxFilter";
import { DoubleSlider } from "../shared/ui/DoubleSlider";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

type Filter = {
  name: string;
  isOpen: boolean;
}

export default function Category() {
  const { products, loading: productsLoading, error: productsError, toggleLike } = useProducts();
  const [types] = useState<string[]>([
    "Летние", "Зимние", "Gore-tex",
    "Brooks", "Для трейла", "Для марафона",
    "Nike", "С поддержкой стопы", "Чёрные",
    "Красные",
  ]);
  const [selectedType, setSelectedType] = useState<string | null>("Для трейла");

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
    <Layout>
      <div className="flex">
        <div className="w-[1240px] mx-auto mb-20">
          <div className='flex gap-5 font-light text-[14px] mt-8'>
            <div>Главная</div>
            <div className="text-[#6D6D6D]">/</div>
            <div className="text-[#6D6D6D]">Каталог</div>
          </div>
          <div className="text-[34px] font-bold text-[#1D1D35] mt-2">Кроссовки для бега с поддержкой</div>
          <div className="flex flex-wrap gap-4">
            {types.map((type) => (
              <div 
                key={type}
                onClick={() => setSelectedType(type)}
                className={`text-[14px] px-5 py-3 mt-5 cursor-pointer select-none ${
                  selectedType === type 
                  ? 'bg-[#D7DFEF] text-[#1D1D35]' 
                  : 'bg-[#EFEFEF] text-[#6D6D6D] hover:bg-[#D7DFEF] hover:text-[#1D1D35] transition-colors duration-300 ease-in-out'
                }`}
              >
                {type}
              </div>
            ))}
          </div>
          <div className="flex mt-10">
            <div className="w-[25%] pr-10">
              <div className="flex flex-col gap-[20px] pb-[30px] mb-[30px] border-b border-[#E4E4E4]">
                <div className="text-[16px] text-[#1D1D35] font-light">Для мужчин</div>
                <div className="text-[16px] text-[#1D1D35] font-light">Для женщин</div>
                <div className="text-[16px] text-[#1D1D35] font-light">Для детей</div>
              </div>
              <div className="flex flex-col gap-y-[30px]">
                {filters.map((filter) => (
                  <div>
                  <div key={filter.name} className="flex items-center cursor-pointer" onClick={() => {filter.isOpen = !filter.isOpen; setFilters([...filters])}}>
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
                      <>
                        {filter.name == "Цена" && (
                          <PriceFilter />
                        )}
                      </>
                      <>
                        {filter.name == "Размер" && (
                          <div className="grid grid-cols-3 gap-2">
                            {Array.from({ length: 7 }, (_, i) => i + 1).map(size => {
                              const value = 5 + (size * 0.5);
                              return (
                                <div key={size} className="cursor-pointer text-center border border-[#E4E4E4] px-3 py-3 text-[#A1A1A1] text-[13px] font-light">
                                  US {value.toFixed(1)}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                      <>
                        {filter.name == "Цвет" && (
                          <ColorFilter />
                        )}
                      </>
                      <>
                        {filter.name == "Сезон" && (
                          <CheckBoxFilter values={["Лето", "Зима", "Весна", "Осень"]} />
                        )}
                      </>
                      <>
                        {filter.name == "Тип активности" && (
                          <CheckBoxFilter values={["Тренировки", "Трейлраннинг", "Марафон"]} />
                        )}
                      </>
                      <>
                        {filter.name == "Пол" && (
                          <CheckBoxFilter values={["Женский", "Мужской"]} />
                        )}
                      </>
                      <>
                        {filter.name == "Наличие мембраны" && (
                          <CheckBoxFilter values={["Без мембраны", "С мембраной"]} />
                        )}
                      </>
                      <>
                        {filter.name == "Пронация" && (
                          <CheckBoxFilter values={["Без поддержки", "С поддержкой"]} />
                        )}
                      </>
                      <>
                        {filter.name == "Бренд" && (
                          <div>
                            <div className="flex items-center mb-5">
                              <FaSearch size={22} className="text-[#6D6D6D]" />
                              <input 
                                type="text" 
                                placeholder="Искать по названию"
                                className="bg-transparent font-light outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-4 w-full"
                              />
                            </div>
                            <CheckBoxFilter values={["Brooks", "Hoka", "Mizuno", "Nike", "Adidas", "Puma"]} />
                          </div>
                        )}
                      </>
                    </div>
                  )}
                  </div>
                ))}
                <IphoneToggle name="Новая коллекция" />
                <IphoneToggle name="Товары со скидкой" />
              </div>
            </div>
            <div className="w-[75%]">
              <div className="text-[18px] font-bold text-[#1D1D35]">Гиперпронатор (Support)</div>
              <div className="text-[16px] font-light mb-4 text-[#6D6D6D] mt-5">У спортсменов с гиперпронацией, касание с поверхностью начинается с внешней стороны стопы, но при приземлении она значительно разворачивается внутрь. Поэтому они называются гиперпронаторами. При приземлении, стопа и голень имеют неустойчивость. Соответственно, затруднена стабилизация тела, нагрузка распределяется неравномерно. Отталкивание происходит, в большей степени, за счёт большого и второго пальца стопы, то есть внутренней части свода. Поэтому гиперпонаторам необходима поддержка свода стопы.</div>
              <div className="flex w-full mb-5">
                <div className="ml-auto relative">
                  <div 
                    className={`border border-[#E4E4E4] px-5 py-2 cursor-pointer flex items-center gap-3 bg-white min-w-[200px] ${isSelectOpen ? 'border-b-0' : ''} `}
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                  >
                    <span className="text-[#6D6D6D] flex-1">{selectedSort}</span>
                    <IoChevronDown 
                      className={`text-[#6D6D6D] transition-transform duration-300 ${
                        isSelectOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      size={16}
                    />
                  </div>
                  
                  {isSelectOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border border-[#E4E4E4] border-t-0 z-10">
                      {sortOptions.map((option) => (
                        <div
                          key={option}
                          className="px-5 py-2 text-[#6D6D6D] hover:text-[#061A84] cursor-pointer transition-colors duration-200"
                          onClick={() => handleSortSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {productsLoading && <div>Loading products...</div>}
              {productsError && <div>Error loading products</div>}
              <GridContainer columns={4}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} onToggleLike={toggleLike} />
                ))}
              </GridContainer>
            </div>
          </div>
      </div>
      </div>
    </Layout>
  );
}

function PriceFilter() {
  const min = 6000;
  const max = 10500;
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const handleSliderChange = (newFrom: number, newTo: number) => {
    setFrom(newFrom);
    setTo(newTo);
  };

  return (
    <div>
      {/* Two inputs from to and under slider */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center border border-[#E4E4E4] px-3 py-1 w-full">
          <div className="text-[14px] text-[#A1A1A1]">от</div>
          <input
            type="number"
            min={min}
            max={to - 1}
            value={from}
            onChange={e => {
              const val = Math.min(Number(e.target.value), to - 1);
              setFrom(val);
            }}
            className="bg-transparent font-light text-[#1D1D35] text-[14px] outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-2 w-full"
          />
        </div>
        <div className="flex items-center border border-[#E4E4E4] pl-3 py-1 w-full">
          <div className="text-[14px] text-[#A1A1A1]">до</div>
          <input
            type="number"
            min={from + 1}
            max={max}
            value={to}
            onChange={e => {
              const val = Math.max(Number(e.target.value), from + 1);
              setTo(val);
            }}
            className="bg-transparent font-light text-[#1D1D35] text-[14px] outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-2 w-full"
          />
        </div>
      </div>
      <DoubleSlider min={min} max={max} from={from} to={to} onChange={handleSliderChange} />
    </div>
  );
}

function ColorFilter() {
  const [colors] = useState<string[]>([
    "#FFFFFF", "#061A84", "#C0FD14",
    "#02AEFF", "#FF4444", "#6D6D6D",
    "#0F754E", "#60BFBF", "#FF6C11",
    "#BB0DD6", "#000000", 
  ]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <div 
          key={color}
          className={`w-[36px] h-[36px] flex rounded-full cursor-pointer ${color == "#FFFFFF" ? "border border-[#E4E4E4]" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        >
          {selectedColor === color && (
            <FaCheck className={`mx-auto my-auto ${color != "#FFFFFF" ? "text-white" : "text-[#A1A1A1]"}`} />
          )}
        </div>
      ))}
    </div>
  )
}