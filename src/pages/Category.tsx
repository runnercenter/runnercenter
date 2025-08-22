import { useState } from "react";
import { GridContainer, Layout, useProducts } from "../shared"
import { ProductCard } from "../entities";
import { IoChevronDown } from 'react-icons/io5';

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

  const [filters] = useState<Filter[]>([
    { name: "Цена", isOpen: true },
    { name: "Сезон", isOpen: true },
    { name: "Тип активности", isOpen: true },
    { name: "Пол", isOpen: true },
    { name: "Размер", isOpen: true },
    { name: "Цвет", isOpen: true },
    { name: "Наличие мембраны", isOpen: true },
    { name: "Пронация", isOpen: true },
    { name: "Бренд", isOpen: true },
    { name: "Новая коллекция", isOpen: true },
    { name: "Товары со скидкой", isOpen: true },
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
        <div className="w-[1240px] mx-auto">
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
            <div className="w-[20%] pr-10">
              <div className="flex flex-col gap-[20px] pb-[30px] mb-[30px] border-b border-[#E4E4E4]">
                <div className="text-[16px] text-[#1D1D35] font-light">Для мужчин</div>
                <div className="text-[16px] text-[#1D1D35] font-light">Для женщин</div>
                <div className="text-[16px] text-[#1D1D35] font-light">Для детей</div>
              </div>
            </div>
            <div className="w-[80%]">
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
  )
}