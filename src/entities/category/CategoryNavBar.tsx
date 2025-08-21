import hotIcon from '../../assets/icons/hot.svg'
import newIcon from '../../assets/icons/new.svg'
import arrowDownIcon from '../../assets/icons/arrow-down-black.svg'
import { useState, useRef, useEffect } from "react";

type Tab = {
    id: number;
    name: string;
}

export function CategoryNavBar() {
    const [tabs] = useState<Tab[]>([
        {
            id: 1,
            name: "Кроссовки",
        },
        {
            id: 2,
            name: "Шиповки",
        },
        {
            id: 3,
            name: "Одежда",
        },
        {
            id: 4,
            name: "Аксессуары",
        },
    ]);
    const [openTab, setOpenTab] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenTab(0);
            }
        }
        if (openTab > 0) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openTab]);

    const handleTabClick = (tabId: number) => {
        setOpenTab((prev) => (prev === tabId ? 0 : tabId));
    };

    return (
        <div className="relative mt-5" ref={navRef}>
            <div className="flex w-[1240px] mx-auto items-center">
                <div className="flex items-center gap-10">
                    {tabs.map((tab, index) => (
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => handleTabClick(tab.id)}
                            key={index}
                            tabIndex={0}
                        >
                            <div className="uppercase">{tab.name}</div>
                            <img src={arrowDownIcon} alt="" className="cursor-pointer object-contain" />
                        </div>
                    ))}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="uppercase">Бренды</div>
                    </div>
                </div>
                <div className="flex items-center ml-auto gap-10">
                    <div className="flex items-center gap-2">
                        <img src={newIcon} alt="" className="cursor-pointer object-contain" />
                        <div className="uppercase">Новинки</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={hotIcon} alt="" className="cursor-pointer object-contain" />
                        <div className="uppercase">Распродажа</div>
                    </div>
                </div>
            </div>
            {/* Dropdown white banner for tab content */}
            {openTab > 0 && (
                <div className="absolute left-0 top-full w-full flex justify-center z-20 bg-white">
                  <div className="w-[1240px] min-h-[180px] py-6 px-8 mt-2">
                    {openTab === 1 && <ShoesTab />}
                    {openTab === 2 && <SpikeTab />}
                    {openTab === 3 && <ClothesTab />}
                    {openTab === 4 && <AccessoriesTab />}
                  </div>
                </div>
            )}
        </div>
    );
}

function ShoesTab() {
    return (
        <div>
            <div className="flex gap-10">
                <div className="text-[18px] flex flex-col gap-[10px] pr-10 border-r border-[#E4E4E4]">
                    <div>Мужские</div>
                    <div>Женские</div>
                    <div>Детские</div>
                </div>
                <div className="flex gap-[70px]">
                    <div className="">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[18px]">По сезону</div>
                            <div className="text-[14px] font-thin underline">Летние</div>
                            <div className="text-[14px] font-thin underline">Зимние</div>
                            <div className="text-[14px] font-thin underline">Демисезонные</div>
                        </div>
                        <div className="flex mt-5 flex-col gap-[5px]">
                            <div className="text-[18px]">По технологиям</div>
                            <div className="text-[14px] font-thin underline">Карбоновая пластина</div>
                            <div className="text-[14px] font-thin underline">Мембрана GORE-TEX</div>
                            <div className="text-[14px] font-thin underline">Мембрана Shield</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[18px]">По типу пронации</div>
                            <div className="text-[14px] font-thin underline">Без поддержки (Neutral)</div>
                            <div className="text-[14px] font-thin underline">C поддержкой (Support)</div>
                            <br/>
                        </div>
                        <div className="flex mt-5 flex-col gap-[5px]">
                            <div className="text-[18px]">По типу активности</div>
                            <div className="text-[14px] font-thin underline">Тренировочные</div>
                            <div className="text-[14px] font-thin underline">Внедорожники</div>
                            <div className="text-[14px] font-thin underline">Марафонки</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[18px]">По брендам</div>
                            <div className="text-[14px] font-thin underline">Brooks</div>
                            <div className="text-[14px] font-thin underline">Hoka</div>
                            <div className="text-[14px] font-thin underline">Mizuno</div>
                            <div className="text-[14px] font-thin underline">Nike</div>
                            <div className="text-[14px] font-thin underline">Saucony</div>
                        </div>
                        <div className="flex mt-2 flex-col gap-[5px]">
                            <div className="text-[18px]">Ботинки</div>
                            <div className="text-[18px]">Сандалии</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/runnercenter/tutorial.png" />
                    <div className="text-[#737373] text-[20px] underline">Как правильно<br/>выбрать кроссовки<br/>для бега?</div>
                </div>
            </div>
            <div className="flex items-center mt-7">
                <div className="text-[17px]">
                    По цвету
                </div>
                <div className="ml-5 flex items-center gap-[15px]">
                    <div className="w-[26px] h-[26px] bg-white border border-[#D9D9D9] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#061A84] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#C0FD14] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#02AEFF] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#FF4444] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#6D6D6D] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#0F754E] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#60BFBF] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#FF6C11] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#BB0DD6] rounded-full"></div>
                    <div className="w-[26px] h-[26px] bg-[#000000] rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

function SpikeTab() {
    return (
        <div className="flex gap-[70px]">
            <div className="">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[18px]">Для бега</div>
                    <div className="text-[14px] font-thin underline">Средний и длинный бег</div>
                    <div className="text-[14px] font-thin underline">Спринтерский и барьерный бег</div>
                </div>
                <div className="flex mt-5 flex-col gap-[5px]">
                    <div className="text-[18px]">Универсальные</div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[18px]">Для прыжков</div>
                    <div className="text-[14px] font-thin underline">В высоту</div>
                    <div className="text-[14px] font-thin underline">С шестом</div>
                    <div className="text-[14px] font-thin underline">В длину</div>
                    <div className="text-[14px] font-thin underline">Для тройного прыжка</div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[18px]">Метаниям</div>
                    <div className="text-[14px] font-thin underline">Для метания копья</div>
                    <div className="text-[14px] font-thin underline">Для толкания ядра</div>
                    <div className="text-[14px] font-thin underline">Для метание молота и диска</div>
                </div>
            </div>
        </div>
    )
}

function ClothesTab() {
    return (
        <div>
            <div className="flex gap-10">
                <div>
                    <div className="flex gap-[70px]">
                        <div className="">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-[18px]">Мужская</div>
                                <div className="text-[14px] font-thin underline">Брюки</div>
                                <div className="text-[14px] font-thin underline">Тайтсы</div>
                                <div className="text-[14px] font-thin underline">Шорты</div>
                                <div className="text-[14px] font-thin underline">Костюмы</div>
                                <div className="text-[14px] font-thin underline">Термобелье</div>
                                <div className="text-[14px] font-thin underline">Куртки</div>
                                <div className="text-[14px] font-thin underline">Футболки</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-[18px]">Женская</div>
                                <div className="text-[14px] font-thin underline">Брюки</div>
                                <div className="text-[14px] font-thin underline">Тайтсы</div>
                                <div className="text-[14px] font-thin underline">Шорты</div>
                                <div className="text-[14px] font-thin underline">Костюмы</div>
                                <div className="text-[14px] font-thin underline">Термобелье</div>
                                <div className="text-[14px] font-thin underline">Куртки</div>
                                <div className="text-[14px] font-thin underline">Футболки</div>
                                <div className="text-[14px] font-thin underline">Топы</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-[5px]">
                                <div className="text-[18px]">Детская</div>
                                <div className="text-[14px] font-thin underline">Тайтсы</div>
                                <div className="text-[14px] font-thin underline">Шорты</div>
                                <div className="text-[14px] font-thin underline">Футболки</div>
                                <div className="text-[14px] font-thin underline">Костюмы</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-7">
                        <div className="text-[17px]">
                            Бренды
                        </div>
                        <div className="ml-5 flex items-center gap-[15px] text-[14px]">
                            <div className="py-2 px-4 bg-[#EFEFEF] text-[#6D6D6D]">Nike</div>
                            <div className="py-2 px-4 bg-[#EFEFEF] text-[#6D6D6D]">Nortland</div>
                            <div className="py-2 px-4 bg-[#EFEFEF] text-[#6D6D6D]">Craft</div>
                            <div className="py-2 px-4 bg-[#EFEFEF] text-[#6D6D6D]">Nordski</div>
                            <div className="py-2 px-4 bg-[#EFEFEF] text-[#6D6D6D]">Brooks</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/runnercenter/banner.png" />
                </div>
                <div>
                    <img src="/runnercenter/tutorial.png" />
                    <div className="w-full bg-[#C0FD14] py-3 uppercase text-center">Руководство</div>
                    <div className="text-[#737373] text-[14px] text-center underline mt-2">Как выбрать экипировку<br/>для марафона?</div>
                </div>
            </div>

        </div>
    )
}

function AccessoriesTab() {
    return (
        <div className="flex gap-[70px]">
            <div className="">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[18px]">Мужские</div>
                    <div className="text-[14px] font-thin underline">Носки</div>
                    <div className="text-[14px] font-thin underline">Гетры</div>
                    <div className="text-[14px] font-thin underline">Шапки и бейсболки</div>
                    <div className="text-[14px] font-thin underline">Перчатки</div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[18px]">Женские</div>
                    <div className="text-[14px] font-thin underline">Носки</div>
                    <div className="text-[14px] font-thin underline">Гетры</div>
                    <div className="text-[14px] font-thin underline">Шапки и бейсболки</div>
                    <div className="text-[14px] font-thin underline">Перчатки</div>
                </div>
            </div>
        </div>
    )
}